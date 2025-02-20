import { LoadingUtil } from './loadingUtil';

export class Funtions extends LoadingUtil {
  lastSumMonto(array: any[], Id: any) {
    var values = array.filter(element => element.CASA == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }

  sumMonto(array: any[], Id: any) {
    var values = array.filter(element => element.CASA == Id);
    let today = new Date().getMonth();
    values = values.filter(mes => {
      return new Date(mes.MES).getMonth() === today;
    });
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }

  sizeMonto(array: any[], Id: any) {
    var values = array.filter(element => element.CASA == Id);
    let today = new Date().getMonth();
    values = values.filter(mes => {
      return new Date(mes.MES).getMonth() === today;
    });
    return values.length;
  }
}
