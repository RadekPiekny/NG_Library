import { Pipe, PipeTransform } from '@angular/core';
import { NgxPaginationRange } from './ngx-pagination.model';
import { ngxPaginationDisabledNext } from './ngx-pagination.function';

@Pipe({
  name: 'ngxPaginationDisabledNext'
})
export class NgxPaginationDisabledNextPipe implements PipeTransform {

  transform(v: NgxPaginationRange): boolean {
    return ngxPaginationDisabledNext(v,v.current);
  }

}
