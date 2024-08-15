import { Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from "@angular/core";
import { ElementBase } from "projects/cms/src/app/services/api/models";

@Directive({
    selector: '[testDirective]'
})
export class TestDirective implements OnInit {
    _testDirective: ElementBase;
    @Input() set testDirective(v: ElementBase) {
        this._testDirective = v;
        this.change(v);
    }
    
    constructor(
        private vcr: ViewContainerRef,
        private renderer: Renderer2,
        private host: ElementRef
    ) {}

    ngOnInit(): void {
        this.change(this._testDirective);
    }

    change(e: ElementBase) {
        console.log("TestDirective works. Element: ", e);
        const element: HTMLElement = this.renderer.createElement(e.className);
        element.classList.add(...e.cssClass.map(c => c.className));
        element.setAttribute("id", e.id.toString());
        const text = this.renderer.createText('I am dynamically created');
        this.renderer.appendChild(element, text);

        this.renderer.appendChild(this.vcr.element.nativeElement.parentElement,element);
        console.log(this.vcr.element.nativeElement.parentElement);
    }

}