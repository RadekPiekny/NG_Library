import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxPopUpService } from '@rp_custom_library/appkit-styled-lib/src/public-api';
import { ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { ComponentService } from 'projects/cms/src/app/services/api/services/component.service';
import { merge, Observable } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { ContainerEditComponent } from '../../elements/container-edit/container-edit.component';
import { generateDefaultPage } from '../../model/element';
import { generateDefaultWebBlocksComponent } from '../../model/element';
import { EditorDraggingService } from '../../service/editor-dragging.service';
import { EditorService } from '../../service/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private editorService: EditorService,
    private editorDraggingService: EditorDraggingService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private componentService: ComponentService,
    private ngxPopUpService: NgxPopUpService
  ) {}

  ngOnDestroy(): void {
    this.editorService.reset();
  }

  private initialRC: ReusableComponent;
  
  skeleton: boolean = false;
  currentType: string;
  skeletonUpdateId: number = 0;

  editorClass: string = '';
  delayForDragMove = 150;
  page$ = this.editorService.page$;
  activeComponent$ = this.editorService.activeWebBlocksComponents$;
  historyDisabled$ = this.editorService.historyDisabled$;
  @ViewChild('editorView') editorView: ElementRef<HTMLDivElement>;
  @ViewChild('pageView') pageView: ContainerEditComponent;
  @ViewChild('dragHelper') dragHelper: ElementRef<HTMLDivElement>;
  isPage: boolean = true;
  params$: Observable<Params> = this.route.params.pipe(take(1));
  queryParams$: Observable<any> = this.route.queryParams;
  idReusableComponent: number;
  dragHelperShow$: Observable<any> = merge(
    this.editorDraggingService.dragStart$.pipe(map(() => true)),
    this.editorDraggingService.dragEnd$.pipe(map(() => false)),
  )

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    this.currentType = (this.router as any).currentUrlTree.root.children.primary.segments[0].path;
    switch (this.currentType) {
      case 'template':
        this.initialRC = generateDefaultPage(true);
        break;
      case 'page':
        this.initialRC = generateDefaultPage(true);
        break;
      case 'component':
        this.initialRC = generateDefaultWebBlocksComponent();
        break;
    }
    if (this.currentType === 'component') {
      this.isPage = false;
    }
    if (this.currentType === 'page' || this.currentType === 'template') {
      this.isPage = true;
    }
    this.editorClass = this.isPage ? 'align-self-start w-full' : '';
    this.params$.subscribe((params: Params) => {
      if (params.id === 'new') { 
        // load default component / page template
        const groupId = parseInt(this.route.snapshot.queryParams.groupId);
        this.editorService.initState(this.initialRC, groupId);
      } else {
        // load from the db
        this.idReusableComponent = params.id;
        this.componentService.apiComponentEditorComponentGet$Json({id: params.id}).subscribe(
          data => {
            if (this.route.snapshot.queryParams.skeleton) {
              this.skeleton = true;
              if (data.skeletonWebBlocksComponentId) {        
                const d = this.componentService.apiComponentIdGet$Json({id: data.skeletonWebBlocksComponentId}).subscribe(
                  srw => {
                    this.skeletonUpdateId = srw.id;        
                    this.initialRC.webBlocksComponent = srw;
                    this.editorService.initState(this.initialRC);
                  }
                );
              } else {
                this.skeletonUpdateId = 0;
                this.editorService.initState(this.initialRC);
              }
            } else {
              this.editorService.initState(data);
            }
          }
        )
      }
    });
    this.editorDraggingService.startDragging.subscribe();
    this.editorDraggingService.dragging$.pipe(
      debounceTime(this.delayForDragMove)
    ).subscribe((d: any) => {
      const err = this.editorDraggingService.ff(d);
      if (err) {
        console.log(err);
        this.ngxPopUpService.newWarning(err);
      }
    })
  }

  ngAfterViewInit(): void {
    this.editorDraggingService.dragHelper = this.dragHelper;
    this.editorDraggingService.renderer = this.renderer;
  }

  editorClick() {
    this.editorService.deactivateAllWebBlocksComponents();
  }
  // original idea was to use this but the issue is too many themes + dark mode/ light mode so in order to display tempalte in a given context
  // we need to load them just like normal pages and scale down.
  // Issue is only with loading too many images so we need skeleton loading and separate loading of the images on all articles
  testCanvas() {
    /*html2canvas(this.editorView.nativeElement,{backgroundColor: null}).then(function(canvas) {
      const ratio: number = parseInt(canvas.style.width) / templatePageWidth;
      canvas.style.width = templatePageWidth + 'px';
      canvas.style.height = parseInt(canvas.style.height) / ratio + 'px';
      console.log(canvas.width);
      document.body.appendChild(canvas);
    });*/
  }

  history(timeUnit: number) {
    this.editorService.browseHistory(timeUnit);
  }

  editorLeave() {
    this.editorService.componentMoveId$.next(null);
  }

  printJSON() {
    const page = this.editorService.showJSON();
    console.log(page);
  }

  PublishEditorComponent() {
    const page = this.editorService.showJSON();
    page.type = this.currentType;
    this.componentService.apiComponentEditorComponentPost$Json({body: page}).subscribe();
  }

  
  UpdateEditorComponent(id: number) {
    const page = this.editorService.showJSON();
    page.type = this.currentType;
    this.componentService.apiComponentUpdateEditorComponentPost$Json({id: id, body: page}).subscribe();
  }

  activateBaseComponent() {
    this.editorService.activateWebBlocksComponent(this.editorService.getState().webBlocksComponent);
  }

  PublishSkeletonComponent() {
    const page = this.editorService.showJSON();
    const skeleton = page.webBlocksComponent;
    delete skeleton.reusableComponentId;
    this.componentService.apiComponentSkeletonPost$Json({ReusableComponentId: this.idReusableComponent, body: skeleton}).subscribe();
  }

  UpdateSkeletonComponent(reusableComponentId: number) {
    // this.skeletonUpdateId
    const page = this.editorService.showJSON();
    const skeleton = page.webBlocksComponent;
    delete skeleton.reusableComponentId;
    this.componentService.apiComponentUpdateSkeletonPost$Json({ReusableComponentId: reusableComponentId,originalSkeletonId: this.skeletonUpdateId,body: skeleton}).subscribe();
    
  }

  changeWidthOfEditor(c: string) {
    if (this.editorClass.includes(c)) {
      this.editorClass = this.editorClass.replace(c,'');
    } else {
      this.editorClass += ` ${c}`; 
    }
  }

}
