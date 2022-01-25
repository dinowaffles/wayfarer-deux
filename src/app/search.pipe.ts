import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cities: any, searchValue: any): any {
    searchValue = searchValue.toLowerCase();
    if(!cities) {
      return null;
    }
    if(!searchValue) {
      return cities;
    } 
    return cities.filter(function(data: any) {
      return JSON.stringify(data).toLowerCase().includes(searchValue);
    });
  }
}
