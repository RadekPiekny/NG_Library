import { Component, OnInit } from '@angular/core';
import { smoothCollapse } from 'rp_custom_library/src/lib/animation';

@Component({
  selector: 'code-show',
  templateUrl: './code-show.component.html',
  styleUrls: ['./code-show.component.css'],
  animations: [smoothCollapse]
})
export class CodeShowComponent {
  show = false;
}
