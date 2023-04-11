import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  transform(value: number): string {
    let result;
    switch (value) {
      case 1:
        result = 'S';
        break;
      case 2:
        result = 'M';
        break;
      case 3:
        result = 'L';
        break;
      default:
        result = value.toString();
        break;
    }
    return result;
  }
}
