export interface Gastos {
  Categoria?: string;
  Nombre?: string;
  Fecha?: string;
  Monto?: string;
  Comentario?: string;
}

export interface GastosDetalle {
  Categoria?: string;
  Nombre?: string;
  Fecha?: string;
  Monto?: string;
  Comentario?: string;
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
  comentario?: string;
}
