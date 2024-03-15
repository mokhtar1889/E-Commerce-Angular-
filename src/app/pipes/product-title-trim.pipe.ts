import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTitleTrim'
})
export class ProductTitleTrimPipe implements PipeTransform {

  transform(title: string, number: number): string {
    return title.split(" ").splice(0,number).join(" ")
  }

}
