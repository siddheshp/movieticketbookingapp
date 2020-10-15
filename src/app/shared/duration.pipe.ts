import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): unknown {
    const inputMinutes = value ? value : 0;
    const hours = Math.floor(inputMinutes / 60); // 5.2 => 5; 5.7 => 5
    const minutes = inputMinutes % 60; //90
    return `${hours} hr ${minutes} mins`;
  }
}
