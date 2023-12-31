import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timesAgo',
})
export class TimesAgoPipe implements PipeTransform {
  transform(value: Date): string {
    return formatDistance(new Date(2023, 8, 17), value);
  }
}
