import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable } from 'rxjs';
import {
  extractImageFromFile,
  formatBytes
} from '@rp_custom_library/appkit-styled-lib/src/lib/function';

@Component({
  selector: 'ngx-file-card',
  templateUrl: './ngx-file-card.component.html',
  styleUrls: ['./ngx-file-card.component.scss']
})
export class NgxFileCardComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.imageString$ = from(extractImageFromFile(this.file));
    this.size = formatBytes(this.file.size, 1);
    this.nameWithoutExtension = this.file.name.replace(/\.[^/.]+$/, '');
    const fileExt = this.file.name.split('.').pop();
    if (fileExt) {
      this.extension = fileExt;
    }
  }

  @Input()
  file!: File;
  @Input() showSize = true;
  @Input() showName = true;
  @Input() showExtension = true;
  imageString$!: Observable<string | ArrayBuffer>;
  size!: string;
  nameWithoutExtension!: string;
  extension!: string;
  @Input()
  previewSize!: string;

  sanitazeImg(src: string | ArrayBuffer): any {
    if (!src) {
      return;
    }
    if (typeof src === 'string') {      
      if (src.startsWith('assets/')) {
        return src;
      }
      if (src != null) {
        return (this.sanitizer.bypassSecurityTrustResourceUrl(src) as any)
          .changingThisBreaksApplicationSecurity;
      }
    }
    return undefined
  }
}
