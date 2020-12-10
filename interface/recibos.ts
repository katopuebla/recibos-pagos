export interface User {
  id?: number;
  uername?: string;
  email?: string;
}

export interface BodySaving {
  spreadsheet_id?: string;
  sheet?: string;
  rows?: any[][];
}

export interface BodiesSaving {
  tables?: BodySaving[];
}

export interface BodyTables {
  table?: string;
  rows?: string[][];
}

export interface Recibo {
  FOLIO?: number;
  CASA?: string;
  NOMBRE?: string;
  CANTIDAD?: string;
  CONCEPTO?: string;
  FECHA?: string;
  CORREO?: string;
  INPUT_TIMESTAMP?: string;
}

export interface ReciboDetalle {
  FOLIO?: number;
  CASA?: string;
  NOMBRE?: string;
  CONCEPTO?: string;
  MES?: string;
  MONTO?: string;
  INPUT_TIMESTAMP?: string;
}

export interface Concepto {
  CONCEPTO?: string;
  MES?: string;
  MONTO?: string;
}

export interface Casa {
  CASA?: string;
  NOMBRE?: string;
  EMAIL?: string;
  EMAIL_CCP?: string;
}
