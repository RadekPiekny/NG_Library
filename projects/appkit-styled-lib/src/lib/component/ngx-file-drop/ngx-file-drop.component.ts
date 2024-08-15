import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  listAnimationFromLeft,
  listAnimattion,
  slideFromLeft
} from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { downloadFile } from '@rp_custom_library/appkit-styled-lib/src/lib/function';

@Component({
  selector: 'ngx-file-drop',
  templateUrl: './ngx-file-drop.component.html',
  styleUrls: ['./ngx-file-drop.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxFileDropComponent),
      multi: true
    }
  ],
  animations: [listAnimattion, listAnimationFromLeft, slideFromLeft],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxFileDropComponent implements ControlValueAccessor {
  onChange!: Function;
  onTouched!: () => void;

  fileList: File[] = []; //for multi

  @Input() disabled = false;
  @Input() editable = true;
  @Input() showSize = true;
  @Input() showName = true;
  @Input() showExtension = true;

  constructor(private fb: UntypedFormBuilder) {}

  writeValue(obj: any): void {
    if (obj instanceof File) {
      this.fileList.push(obj);
    }
    if (Array.isArray(obj)) {
      if (obj[0] instanceof File) {
        this.fileList.push(...obj);
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  browseFile(e: Event) {
    if (this.cancel((e.target as any).files)) {
      return;
    }
    const fileListArr: any[] = Array.from((e.target as any).files);
    const newFileList: File[] = [...this.fileList];
    newFileList.push(...fileListArr);
    this.updateFiles(newFileList);
  }

  onSelectFile(fileList: File[]) {
    if (this.cancel(fileList)) {
      return;
    }
    const newFileList: File[] = [...this.fileList];
    newFileList.push(...fileList);
    this.updateFiles(newFileList);
  }

  updateFiles(fileList: File[]) {
    this.onChange && this.onChange(fileList);
    this.fileList = fileList;
  }

  cancel(fileList: File[]): boolean {
    if (fileList.length === 0 && this.fileList.length > 0) {
      return true;
    }
    return false;
  }

  deleteFile(i: number) {
    this.fileList.splice(i, 1);
    this.updateFiles(this.fileList);
  }

  download(file: File) {
    downloadFile(file);
  }

  controls: UntypedFormGroup = this.fb.group({
    showSize: true,
    showName: true,
    showExtension: true
  });
}
