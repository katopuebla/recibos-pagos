import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "groupBy"
})
export class GroupByPipe implements PipeTransform {
  transform(
    collection: Array<any>,
    property: string,
    orderType: string = "asc"
  ): Array<any> {
    if (!collection) {
      return [];
    }
    //console.log('collect', collection)
    let groupedCollection = collection.reduce((previous, current) => {
      previous[current[property]] = [
        ...(previous[current[property]] || []),
        current
      ];
      return previous;
    }, {});
    var objects = Object.keys(groupedCollection).map(header => ({
      header,
      details: groupedCollection[header]
    }));
    //console.log('objects',objects )
    let sortedCollection = objects.sort((a, b) => {
      if (isNaN(+a.header)) {
        // returns true if NaN, otherwise false
        return 0 - (a.header > b.header ? -1 : 1);
      } else {
        return 0 - (a > b ? -1 : 1);
      }
    });
    if (orderType == "desc" || orderType == "DESC" || orderType == "reverse") {
      sortedCollection.reverse();
    }
    //console.log('sorted',sortedCollection )
    return sortedCollection;
  }
}
