export interface Gastos {
  Categoria?: string;
  Nombre?: string;
  Fecha?: string;
  Monto?: string;
  Commentario?: string;
}

export interface GastosDetalle {
  Categoria?: string;
  Nombre?: string;
  Fecha?: string;
  Monto?: string;
  Commentario?: string;
}

export interface CategoriaDef {
  Nombre?: string;
  Tipo?: string;
  PersonaServicio?: string;
}

export interface Concepto {
  concepto?: string;
  mes?: string;
  monto?: string;
}
