import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNum'
})
export class FormatNumPipe implements PipeTransform {

  transform(value: any, len?: number): string {
//    let type = typeof value;

if(!value || value instanceof Object){
  return;
}
  const val = `${value}`;
  let abc;
   // len = len || 5;
    abc = '#' +  val.padStart(len, '0');
    

    return abc ;
  }

}
