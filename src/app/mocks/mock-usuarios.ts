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
    ROLE: 'dev'
  },
  {
    ID: 'antonio',
    PASSWORD: 'Antonio123',
    NOMBRE: 'Antonio Baéz',
    EMAIL: 'antonio@email.com',
    TELEFONO: '555-1111',
    ROLE: 'user'
  },
  {
    ID: 'luis',
    PASSWORD: 'luispass',
    NOMBRE: 'Luis Perez',
    EMAIL: 'luis@email.com',
    TELEFONO: '555-2222',
    ROLE: 'user'
  }
];
