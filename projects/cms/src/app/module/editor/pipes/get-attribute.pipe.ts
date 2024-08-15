import { Pipe, PipeTransform } from '@angular/core';
import { ElementAttribute } from '../../../services/api/models';

@Pipe({
  name: 'getAttribute'
})
export class GetAttributePipe implements PipeTransform {

  transform(value: ElementAttribute[], name: string): string {
    console.log("attribute pipe run");
    if (!value) {
      return ""
    } else {
      return value.find(a => a.name === name).value;
    }
  }

}
