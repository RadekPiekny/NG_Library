import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { slideFromLeft } from 'rp_custom_library/src/lib/animation';
import { BehaviorSubject, Subject, interval, of } from 'rxjs';
import { filter, finalize, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('bannerSlide', [
    transition(':enter', [
      style({ transform: 'translateX(-32px)', opacity: 0 }),
      animate('1.2s ease-in-out')
    ]),
  ])],
})
export class BannerComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    this.toggleProgression();
  }

  destroy = new BehaviorSubject<void>(null);
  ngOnDestroy(): void {
    this.stop$.next();
  }

  tabs = [0,1,2,3]
  activeTab: number = 0;
  progress: number = 0;
  progress$ = new BehaviorSubject<number>(0);
  duration = 5;
  screenRefreshMs = 16;
  steps = this.duration * 1000 / this.screenRefreshMs;
  stop$ = new Subject<void>();
  running: boolean = false;

  resumeProgress(currentProgress = this.progress) {
    const q = interval(this.screenRefreshMs).pipe(
      map(counter => {
        const counterResume = currentProgress / 100 * this.steps;
        const newCounter = counter + counterResume;
        let progress = ((newCounter % this.steps) / this.steps) * 100;
        this.progress = progress;
        if ((newCounter % this.steps ) < 1 && counter !== 0) {
          this.activeTab++;
          if (this.activeTab === this.tabs.length) {
            this.activeTab = 0;
          } 
          this.progress = 0;
        }
        this.progress$.next(this.progress);
        return this.progress;
      }),
      takeUntil(this.stop$),
      finalize(() => console.log("end"))
    )
    q.subscribe();
  }

  toggleProgression() {
    this.running = !this.running;
    if (!this.running) {
      this.stop$.next();
    } else {
      this.resumeProgress();
    }
  }

}
