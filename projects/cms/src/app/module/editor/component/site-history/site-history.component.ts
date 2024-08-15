import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-site-history',
  templateUrl: './site-history.component.html',
  styleUrls: ['./site-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
