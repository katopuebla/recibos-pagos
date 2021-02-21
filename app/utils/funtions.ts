import { LoadingUtil } from "./loadingUtil";

export class Funtions extends LoadingUtil {
  sumMonto(array, Id) {
    var values = array.filter(element => element.CASA == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }
}
