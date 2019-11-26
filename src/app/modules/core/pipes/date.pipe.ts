import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  constructor() { }

  transform(value: string) {
    return new Date(value).toLocaleDateString();
  }

}