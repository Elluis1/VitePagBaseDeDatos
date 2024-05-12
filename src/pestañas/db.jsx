import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
    paciente: '++id, nombre, apellido, nacimiento' // Primary key and indexed props
  });