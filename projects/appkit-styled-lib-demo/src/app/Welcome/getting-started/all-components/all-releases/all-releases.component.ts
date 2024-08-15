import { Component, Input } from '@angular/core';
import { ReleaseData } from './release.model';
import { releaseDataVer4 } from './release-4.data';
import { releaseDataVer5 } from './release-5.data';

@Component({
  selector: 'app-all-releases',
  templateUrl: './all-releases.component.html',
})
export class AllReleasesComponent {
  @Input() angularVersion: number = 17;
  @Input() data: ReleaseData[];
  @Input() angularPreviewsVersion: number = 16;

  dataVersion4_5;

  ngOnInit() {
    this.dataVersion4_5 = [this.data[1], this.data[2]]
  }
}
