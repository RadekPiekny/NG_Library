import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, Observable, interval, of, combineLatest, merge } from 'rxjs';
import { delay, delayWhen, filter, map, mapTo, mergeMap, pairwise, share, shareReplay, skip, startWith, switchMap, takeLast, tap } from 'rxjs/operators';

@Component({
  selector: 'app-loading-indication',
  templateUrl: './loading-indication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicationComponent {

  eventId = 0;
  defaultDelay = 3000;
  minimumDuration = 8000;

  events$ = new BehaviorSubject<ILoadingEvent[]>([]);
  counter$: Observable<number> = this.events$.pipe(
    map(v => v.length)
  );
  counterStart$: Observable<Date | null> = this.counter$.pipe(
    pairwise(),
    filter(v => {
      console.log("counterStart$");
      const previous = v[0];
      const current = v[1];
      return current === 1 && previous === 0
    }),
    map(() => new Date())
  );
  counterEnd$: Observable<Date | null> = this.counter$.pipe(
    pairwise(),
    filter(v => {
      const previous = v[0];
      const current = v[1];
      return current === 0 && previous === 1
    }),
    map(() => new Date())
  );

  counterEndDelayed$ = merge(
    of(new Date()),
    this.counterStart$.pipe(
      switchMap(startTime => this.fewfew(startTime)),
      tap(d => console.log("counterEndDelayed$"))
    )
  ) 

  loading$: Observable<boolean> = combineLatest([this.counterStart$,this.counterEndDelayed$]).pipe(
    map(data => {
      console.log(data);
      return {start: data[0], end: data[1]}
    }),
    map(data => {
      const loading = data.end < data.start;
      console.log(loading);
      return loading
    }),
    delay(0)
  )

  fewfew(startTime: Date): Observable<Date> {
    return this.counterEnd$.pipe(
      map(counterEnd => {
        const q = this.msBetweenDates(startTime,new Date());
        return q
      }),
      delayWhen(duration => {
        if (this.minimumDuration < duration) {
          return interval(0) 
        } else {
          return interval(this.minimumDuration - duration)
        }
      }),
      map(duration => new Date())
    )
  }


  constructor(private cdr: ChangeDetectorRef){}

  newEvent() {
    this.eventId += 1;
    const e: ILoadingEvent = {
      id: this.eventId, 
      startTime: new Date(), 
      delay: this.defaultDelay
    };

    setTimeout(() => {
      const x = [...this.events$.getValue()];
      const index = this.events$.getValue().findIndex(event => event.id === e.id);
      x.splice(index,1);
      this.events$.next([...x]);
    }, this.defaultDelay);

    const x = [...this.events$.getValue(),e];
    this.events$.next(x);
  }

  msBetweenDates(date1: Date, date2: Date): number {
    const diffMs: number = date2.getTime() - date1.getTime();
    return Math.abs(diffMs);
  }
}

interface ILoadingEvent {
  id: number;
  startTime: Date;
  delay: number;
}