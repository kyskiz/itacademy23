import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiLoString'
})
export class HiLoStringPipe implements PipeTransform {

  transform(value: string, startUppercase: boolean = true): string {
    let result = '';
    let index = 0;

    while (result.length != value.length) {
      result += value.charAt(index++)[startUppercase ? 'toUpperCase' : 'toLowerCase']();
      startUppercase = !startUppercase;
    }

    return result;
  }

}
