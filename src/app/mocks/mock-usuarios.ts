// Datos de prueba para Usuarios
import { Usuario } from '../interface/recibos';

export const MOCK_USUARIOS: Usuario[] = [
  {
    ID: 'admin',
    PASSWORD: 'admin123',
    NOMBRE: 'Administrador',
    EMAIL: 'admin@email.com',
    TELEFONO: '555-0000',
    ROLE: 'admin'
  },
  {
    ID: 'kato',
    PASSWORD: 'kato123',
    NOMBRE: 'Kato puebla',
    EMAIL: 'katopuebla@email.com',
    TELEFONO: '555-1112',
    ROLE: 'user'
  },
  {
    ID: 'juan',
    PASSWORD: 'juanpass',
    NOMBRE: 'Juan Pérez',
    EMAIL: 'juan@email.com',
    TELEFONO: '555-1111',
    ROLE: 'user'
  },
  {
    ID: 'ana',
    PASSWORD: 'anapass',
    NOMBRE: 'Ana López',
    EMAIL: 'ana@email.com',
    TELEFONO: '555-2222',
    ROLE: 'user'
  }
];
