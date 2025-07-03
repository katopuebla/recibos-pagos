// Datos de prueba para ReciboDetalle
import { ReciboDetalle } from '../interface/recibos';

export const MOCK_RECIBOS_DETALLE: ReciboDetalle[] = [
  {
    FOLIO: 1,
    CASA: 'A1',
    NOMBRE: 'Juan Pérez',
    CONCEPTO: 'Renta',
    MES: '2025-06',
    MONTO: '1200',
    INPUT_TIMESTAMP: '2025-06-01T10:00:00'
  },
  {
    FOLIO: 2,
    CASA: 'A2',
    NOMBRE: 'Ana López',
    CONCEPTO: 'Renta',
    MES: '2025-07',
    MONTO: '1200',
    INPUT_TIMESTAMP: '2025-07-01T10:00:00'
  },
  {
    FOLIO: 3,
    CASA: 'A1',
    NOMBRE: 'Juan Pérez',
    CONCEPTO: 'Mantenimiento',
    MES: '2025-06',
    MONTO: '800',
    INPUT_TIMESTAMP: '2025-06-15T09:00:00'
  }
];
