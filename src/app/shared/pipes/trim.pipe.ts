import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, length: number = 95): string {
    if(value.length > length) {
      return value.substring(0, length) + '...'
    }
    return value;
  }

}
