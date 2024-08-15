import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
    selector: 'ngx-bc-item',
    templateUrl: './breadcrumb-item.component.html',
    styles: [':host { display: inline-block }'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBreadcrumbItemComponent {

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    @Input() icons: boolean = false;
    @Input() link!: string;

    _isLast = false;
    @Input() set isLast(v: boolean) {
        this._isLast = v;
        this.cdr.markForCheck();
    };
    @Input() text!: string;
    @Input() routerLink!: string;

    userString!: string;

}