import { Pipe, PipeTransform } from '@angular/core';
import { NgxPaginationRange } from './ngx-pagination.model';
import { ngxPaginationDisabledPrevious } from './ngx-pagination.function';

@Pipe({
  name: 'ngxPaginationDisabledPrevious'
})
export class NgxPaginationDisabledPreviousPipe implements PipeTransform {

  transform(v: NgxPaginationRange): boolean {
    return ngxPaginationDisabledPrevious(v,v.current);
  }

}
