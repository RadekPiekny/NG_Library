import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[pasteRemoveFormat]'
})
export class NgxPasteRemoveFormatDirective {
  @HostListener('paste', ['$event']) removeFormat(e: Event) {
    e.preventDefault();
    let text = '';
    if ((e as any).clipboardData || (e as any).originalEvent.clipboardData) {
      text = ((e as any).originalEvent || e).clipboardData.getData(
        'text/plain'
      );
    } else if ((window as any).clipboardData) {
      text = (window as any).clipboardData.getData('Text');
    }
    if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertText', false, text);
    } else {
      document.execCommand('paste', false, text);
    }
  }
}
