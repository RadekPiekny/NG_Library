import { Component, OnInit } from '@angular/core';
import { slideFromTop } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { IAppkitIcon } from '../../model/icon.model';
import { appkitIconOutline } from '../../model/icons-appkit-outline-final';
import { ElementEditOverlayBaseComponent } from '../element-edit-overlay-base.component';

@Component({
  selector: 'app-icon-edit-overlay',
  templateUrl: './icon-edit-overlay.component.html',
  styleUrls: ['./icon-edit-overlay.component.scss'],
  animations: [
    slideFromTop
  ],
})
export class IconEditOverlayComponent extends ElementEditOverlayBaseComponent implements OnInit {

  ngOnInit(): void {
  }

  appkitIconOutline: IAppkitIcon[] = appkitIconOutline;
  changeIcon(icon: IAppkitIcon) {
    this.form.get('icon').patchValue(icon.onlyIconName);
  }

}
