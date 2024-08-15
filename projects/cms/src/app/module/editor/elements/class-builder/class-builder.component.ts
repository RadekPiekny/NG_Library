
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditorService } from '../../service/editor.service';
import cloneDeep from 'lodash/cloneDeep';
import { WebBlocksComponent, ElementCssClass } from 'projects/cms/src/app/services/api/models';


@Component({
  selector: 'app-class-builder',
  templateUrl: './class-builder.component.html',
  styleUrls: ['./class-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassBuilderComponent {

  constructor(
    private editorService: EditorService
  ) { }

  _data: WebBlocksComponent;
  fc: FormControl = new FormControl('');
  cssClassesString: string = "";
  @Input() set data(v: WebBlocksComponent) {
    this._data = cloneDeep(v);
    this._data.elementBase.cssClass = this._data.elementBase.cssClass.filter(c => c.className !== 'component-active'); // this is only editor state
    this.sortData(this._data);
    this.cssClassesString = this._data.elementBase.cssClass.map(c => c.className).join(' ');
    console.log(this._data);
  };
  @Output() dataChange: EventEmitter<WebBlocksComponent> = new EventEmitter<WebBlocksComponent>();

  newStuff(c: string) {
    const myArray = c.split(" ");
    const newClasses: ElementCssClass[] = myArray.map(v => {return {className: v}});
    this._data.elementBase.cssClass = [...this._data.elementBase.cssClass, ...newClasses];
    this.sortData(this._data);
    this.cssClassesString = this._data.elementBase.cssClass.map(c => c.className).join(' ');
    this.dataUpdate();
    this.fc.patchValue("");
  }

  delete(cssClass: ElementCssClass) {
    const newClasses: ElementCssClass[] = [...this._data.elementBase.cssClass.filter(c => c.className !== cssClass.className)];
    this._data.elementBase.cssClass = newClasses;
    this.sortData(this._data);
    this.cssClassesString = this._data.elementBase.cssClass.map(c => c.className).join(' ');
    this.dataUpdate();
  }

  dataUpdate() {
    /*this._data.elementBase.cssClass.push({
      className: 'component-active'
    })*/
    this.dataChange.emit(this._data);
  }

  deleteAll() {
    this._data.elementBase.cssClass.forEach(c => this.delete(c));
  }

  sortData(v: WebBlocksComponent): WebBlocksComponent {
    v.elementBase.cssClass.sort(
      function(a, b) {
        var textA = a.className.toUpperCase();
        var textB = b.className.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
    )
    return v;
  }

}
