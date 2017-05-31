import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'placapiper',
})
export class PlacaPipe implements PipeTransform {
  transform(value: string): string{
		return value.substr(0, 3) + '-' + value.substr(3,4);
}
}
