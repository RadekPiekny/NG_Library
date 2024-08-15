import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-tabs-raised-guide',
  templateUrl: './nav-tabs-raised-guide.component.html',
  styleUrls: ['./nav-tabs-raised-guide.component.css']
})
export class NavTabsRaisedGuideComponent {
  tabs = [
    { name: 'first', active: false },
    { name: 'second', active: true },
    { name: 'third', active: false },
    { name: 'forth', active: false }
  ];

  activate(item: {name: string, active: boolean}) {
    this.tabs.forEach((t) => (t.active = false));
    item.active = true;
  }
}
