import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], orderBy: string): any[] {
    return value.sort((a: any, b: any ) => {
      return a[orderBy] - b[orderBy];
    });
  }

}
