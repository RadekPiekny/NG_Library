import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number): string {
    // Convert bytes to kilobytes and round to the nearest integer
    const kilobytes = Math.round(value / 1024);
    return kilobytes.toString() + ' KB';
  }

}
