import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FileModel } from 'projects/cms/src/app/services/api/models';
import { FileService } from 'projects/cms/src/app/services/api/services';
import { environment } from 'projects/cms/src/environments/environment';
import { BaseAttributesComponent } from '../base-attributes.component';

@Component({
  selector: 'image-attributes',
  templateUrl: './image-attributes.component.html'
})
export class ImageAttributesComponent extends BaseAttributesComponent implements OnChanges {

  constructor(
    private fileService: FileService
  ) {
    super()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.imageData = {
        name: this._data.elementBase.files[0].name,
        mimeType: this._data.elementBase.files[0].mimeType,
        size: `${this.convertSizeToKb(this._data.elementBase.files[0].size)} kB`
      }
    }
  }

  env = environment;
  imageData: {name: string, mimeType: string, size: string};
  size: string;

  onFileSelected(e: Event) {
    const target = e.target as HTMLInputElement;
    this.fileService.apiFileUploadPost$Json({body: {file: target.files[0]}}).subscribe(
      success => {
        console.log("looks good: ", success);
        this.changeImage(success);
      },
      err => {
        console.log(err);
      }
    );
    console.log(target.files);
  }

  changeImage(img: FileModel) {
    if (this._data.elementBase.files.length) {
      this._data.elementBase.files = [];
    }
    this._data.elementBase.files.push(img);
    const encodedMime = encodeURIComponent(img.mimeType);
    this._data.elementBase.attributes.find(a => a.name === "src").value = `${this.env.localUrl}/api/File/get?name=${img.guid}&mime=${encodedMime}`;
    this.dataChange.emit(this._data);
  }

  convertSizeToMb(bytes: number, roundTo: number = 2) {
    var converted = bytes / (1024*1024);
    return converted.toFixed(roundTo);
  }

  convertSizeToKb(bytes: number, roundTo: number = 0) {
    var converted = bytes / (1024);
    return converted.toFixed(roundTo);
  }
}
