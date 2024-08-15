import { Component, OnInit } from '@angular/core';
import { ElementEditOverlayBaseComponent } from '../element-edit-overlay-base.component';

@Component({
  selector: 'app-image-edit-overlay',
  templateUrl: './image-edit-overlay.component.html',
  styleUrls: ['./image-edit-overlay.component.scss']
})
export class ImageEditOverlayComponent extends ElementEditOverlayBaseComponent {

  uploadFiles(e) {
    console.log(e);
  }
  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      if(this.imageInvalid(event.target.files[0])) {
        return;
      }
      this.form.get('src').patchValue(event.target.files[0]);
    }
  }

  imageInvalid(file: File): boolean{
    var idxDot = file.name.lastIndexOf(".") + 1;
    var extFile = file.name.substr(idxDot, file.name.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){
      return false;
    }else{
      return true;
    }   
  }
}
