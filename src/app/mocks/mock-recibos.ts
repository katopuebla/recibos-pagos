// Datos de prueba para Recibos
import { Recibo } from '../interface/recibos';

export const MOCK_RECIBOS: Recibo[] = [
  {
    FOLIO: 1,
    CASA: 'A1',
    NOMBRE: 'Juan Pérez',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta junio',
    FECHA: '2025-06-01',
    CORREO: 'juan.perez@email.com',
    INPUT_TIMESTAMP: '2025-06-01T10:00:00'
  },
  {
    FOLIO: 2,
    CASA: 'A2',
    NOMBRE: 'Ana López',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta julio',
    FECHA: '2025-07-01',
    CORREO: 'ana.lopez@email.com',
    INPUT_TIMESTAMP: '2025-07-01T10:00:00'
  },
  {
    FOLIO: 3,
    CASA: 'A1',
    NOMBRE: 'Juan Pérez',
    CANTIDAD: '800',
    CONCEPTO: 'Pago de mantenimiento',
    FECHA: '2025-06-15',
    CORREO: 'juan.perez@email.com',
    INPUT_TIMESTAMP: '2025-06-15T09:00:00'
  },
  {
    FOLIO: 4,
    CASA: 'A3',
    NOMBRE: 'Carlos Ruiz',
    CANTIDAD: '500',
    CONCEPTO: 'Pago de agua',
    FECHA: '2025-05-20',
    CORREO: 'carlos.ruiz@email.com',
    INPUT_TIMESTAMP: '2025-05-20T08:00:00'
  },
  {
    FOLIO: 5,
    CASA: 'A2',
    NOMBRE: 'Ana López',
    CANTIDAD: '950',
    CONCEPTO: 'Pago de luz',
    FECHA: '2025-04-10',
    CORREO: 'ana.lopez@email.com',
    INPUT_TIMESTAMP: '2025-04-10T11:00:00'
  },
  {
    FOLIO: 6,
    CASA: 'A4',
    NOMBRE: 'Luis Gómez',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta marzo',
    FECHA: '2025-03-05',
    CORREO: 'luis.gomez@email.com',
    INPUT_TIMESTAMP: '2025-03-05T12:00:00'
  },
  {
    FOLIO: 7,
    CASA: 'A1',
    NOMBRE: 'Juan Pérez',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta febrero',
    FECHA: '2025-02-01',
    CORREO: 'juan.perez@email.com',
    INPUT_TIMESTAMP: '2025-02-01T10:00:00'
  },
  {
    FOLIO: 8,
    CASA: 'A5',
    NOMBRE: 'María Torres',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta enero',
    FECHA: '2025-01-01',
    CORREO: 'maria.torres@email.com',
    INPUT_TIMESTAMP: '2025-01-01T10:00:00'
  },
  {
    FOLIO: 9,
    CASA: 'A3',
    NOMBRE: 'Carlos Ruiz',
    CANTIDAD: '300',
    CONCEPTO: 'Pago parcial de renta',
    FECHA: '2025-06-25',
    CORREO: 'carlos.ruiz@email.com',
    INPUT_TIMESTAMP: '2025-06-25T13:00:00'
  },
  {
    FOLIO: 10,
    CASA: 'A2',
    NOMBRE: 'Ana López',
    CANTIDAD: '1200',
    CONCEPTO: 'Pago de renta junio (atrasado)',
    FECHA: '2025-06-30',
    CORREO: 'ana.lopez@email.com',
    INPUT_TIMESTAMP: '2025-06-30T14:00:00'
  }
];
