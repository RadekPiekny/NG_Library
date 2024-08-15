import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
// mask is in mask.html. There was appkit one but it sucked using path instead of just having one circle as mask. SVG stuff is converted then to base64
// base64 is the only reasonable option I have found due to the complex issues regarding using assests in monorepo/library etc.
const maskAvatarBase64 = "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxtYXNrIGlkPSJyZWt0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBpZD0iYXZhdGFyUmVjdCIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSItNDUiIGN5PSI1MCIgcj0iNjAiIGZpbGw9ImJsYWNrIiBpZD0iYXZhdGFyQXJjIi8+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBtYXNrPSJ1cmwoI3Jla3QpIi8+Cjwvc3ZnPg==)"

@Directive({
  selector: '[NgxAvatarsRow]'
})
export class NgxAvatarsRowDirective implements OnDestroy {

  constructor(
    private host: ElementRef,
    private renderer: Renderer2, 
  ) { }

  obs: MutationObserver | undefined;

  ngOnDestroy(): void {
    if (this.obs) {
      this.obs.disconnect();
    }
  }

  ngOnInit() {
    this.mutationObserverInit(); 
  }

  update() {
    const children = [...this.host.nativeElement.children];
    this.host.nativeElement.style.position = "relative";
    children.forEach((el,i) => {
      const borderWidth = window.getComputedStyle(el, null);
      const left = `calc(${children.length - 1} * ${borderWidth.borderBlockStartWidth} - ${i} * 2 * ${borderWidth.borderBlockStartWidth})`;
      this.renderer.setStyle(el, "position", "relative");
      this.renderer.setStyle(el, "left", left);
      this.renderer.setStyle(el, "opacity", 1 - i * 0.03);
      if(i !== 0) { this.renderer.setStyle(el, "-webkit-mask-image", maskAvatarBase64); }
    })
  }

  // if we use regular angular hooks then for some reason adding elements work but removing does not show children change in the host...
  // so If I have a model and I add en element its all good and here in some hook like ngAfterViewChecked I can see that children count changes
  // but if I remove an item from the array that we use with ngFor directive then I do not see the changed in children and still see previous elements...
  mutationObserverInit() {
    this.obs = new MutationObserver((mutationsList, observer) => {
      for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log("mutation");
          this.update();
        }
      }
    });
  
    this.obs.observe(this.host.nativeElement, { 
        attributes: false, 
        childList: true, 
        subtree: false }
    );
  }

}
