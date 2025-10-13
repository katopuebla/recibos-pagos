export interface Usuario {
  ID?: string;
  PASSWORD?: string;
  NOMBRE?: string;
  EMAIL?: string;
  TELEFONO?: string;
  ROLE?: string;
}

export interface Recibo {
  FOLIO: number;  // Remove optional if this is always required
  CASA: string;   // Remove optional if this is always required
  NOMBRE: string;
  CANTIDAD: string;
  CONCEPTO: string;
  FECHA: string;
  CORREO: string;
  INPUT_TIMESTAMP: string;
  PREFIX: string;
}

export interface ReciboMaxFolio {
  FOLIO: number;
}

export interface ReciboDetalle {
  FOLIO?: number;
  CASA?: string;
  NOMBRE?: string;
  CONCEPTO?: string;
  MES?: string;
  MONTO?: string;
  INPUT_TIMESTAMP?: string;
  PREFIX?: string;
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

export interface PrefijoDef {
  PREFIJO?: string;
  NOMBRE?: string;
  FOLIO: number;
}
