import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: string, ...name: string[]): unknown {
    return "firstname "+name;
  }

}
