// Datos de prueba para Gastos
import { Gastos, GastosDetalle, CategoriaDef } from '../interface/gastos';

export const MOCK_GASTOS: Gastos[] = [
  {
    Categoria: 'Mantenimiento',
    Nombre: 'Reparación de plomería',
    Fecha: '2025-06-05',
    Monto: '300',
    Comentario: 'Cambio de llave en baño'
  },
  {
    Categoria: 'Suministros',
    Nombre: 'Compra de focos',
    Fecha: '2025-06-10',
    Monto: '150',
    Comentario: 'Focos LED para pasillo'
  },
  {
    Categoria: 'Servicios',
    Nombre: 'Pago de agua',
    Fecha: '2025-06-15',
    Monto: '500',
    Comentario: 'Pago bimestral'
  },
  {
    Categoria: 'Mantenimiento',
    Nombre: 'Pintura',
    Fecha: '2025-05-20',
    Monto: '1200',
    Comentario: 'Pintura de fachada'
  }
];

export const MOCK_GASTOS_DETALLE: GastosDetalle[] = [
  {
    Categoria: 'Mantenimiento',
    Nombre: 'Reparación de plomería',
    Fecha: '2025-06-05',
    Monto: '300',
    Comentario: 'Cambio de llave en baño'
  },
  {
    Categoria: 'Suministros',
    Nombre: 'Compra de focos',
    Fecha: '2025-06-10',
    Monto: '150',
    Comentario: 'Focos LED para pasillo'
  },
  {
    Categoria: 'Servicios',
    Nombre: 'Pago de agua',
    Fecha: '2025-06-15',
    Monto: '500',
    Comentario: 'Pago bimestral'
  }
];

export const MOCK_CATEGORIAS: CategoriaDef[] = [
  { Nombre: 'Mantenimiento', Tipo: 'Gasto', PersonaServicio: 'Juan Albañil' },
  { Nombre: 'Suministros', Tipo: 'Gasto', PersonaServicio: 'Ferretería Central' },
  { Nombre: 'Servicios', Tipo: 'Gasto', PersonaServicio: 'Agua Municipal' },
  { Nombre: 'Limpieza', Tipo: 'Gasto', PersonaServicio: 'Limpieza Express' }
];
