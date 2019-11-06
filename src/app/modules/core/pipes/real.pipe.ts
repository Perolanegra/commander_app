import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real'
})
export class RealPipe implements PipeTransform {
  constructor() { }

  transform(value: number) {
    return value.toFixed(2).replace(".", ",");
  }

}