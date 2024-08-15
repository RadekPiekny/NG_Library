import { ChangeDetectionStrategy, Component } from '@angular/core';
import { releaseDataVer6 } from './all-components/all-releases/release-6.data';
import { releaseDataVer5 } from './all-components/all-releases/release-5.data';
import { releaseDataVer4 } from './all-components/all-releases/release-4.data';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent  {
  releaseData = [releaseDataVer6,releaseDataVer5,releaseDataVer4];

}
