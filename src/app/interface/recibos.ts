export interface User {
  id?: number;
  uername?: string;
  email?: string;
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
  concepto?: string;
  mes?: string;
  monto?: string;
}

export interface Casa {
  ID?: string;
  NOMBRE?: string;
  EMAIL?: string;
  EMAIL_CCP?: string;
}

export interface ConceptoDef {
  NOMBRE?: string;
}
