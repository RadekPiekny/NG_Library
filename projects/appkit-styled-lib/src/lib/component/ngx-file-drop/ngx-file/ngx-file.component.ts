import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  downloadFile,
  formatBytes
} from '@rp_custom_library/appkit-styled-lib/src/lib/function';

@Component({
  selector: 'ngx-file',
  templateUrl: './ngx-file.component.html',
  styleUrls: ['./ngx-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxFileComponent {
  @Input()
  file!: File;

  sizeInMB(bytes: number): string {
    return formatBytes(bytes, 0);
  }

  getFileType(name: string): string {
    if (name && name.includes('.')) {
      let fileExt = name.split('.').pop();
      if (fileExt === 'jpeg') {
        fileExt = 'jpg';
      }
      if (fileExt) {
        return fileExt;
      }
    }
    return 'name';
  }

  download(file: File) {
    downloadFile(file);
  }
}
