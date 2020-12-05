import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "groupBy"
})
export class GroupByPipePipe implements PipeTransform {
  transform(collection: Array<any>, property: string): Array<any> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }
    /*
    let groupedCollection = collection.reduce((previous, current) => {
      previous[current[property]] = [...(previous[current[property]] || []), current];
      return previous;
    }, {});
*/
    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});
    var objects = Object.keys(groupedCollection).map(value => ({
      value,
      details: groupedCollection[value]
    }));
    return objects;
  }
}
