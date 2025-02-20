import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(
    collection: Array<any>,
    property: string,
    orderType?: string
  ): Array<any> {
    if (!collection) {
      return [];
    }
    //console.log("collect", collection);
    let sortedCollection: any[];
    if (orderType == "desc" || orderType == "DESC") {
      sortedCollection = collection.sort((a, b) =>
        a[property] > b[property] ? -1 : 1
      );
    } else {
      sortedCollection = collection.sort((a, b) =>
        a[property] < b[property] ? -1 : 1
      );
    }
    console.log("collect sorted", sortedCollection);
    return sortedCollection;
  }
}
