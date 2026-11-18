import { Users } from '../interfaces/users';
import { filtrarPorNombre } from './usuarios';

const usuarios: Users[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    correo: 'leanne@example.com',
    ciudad: 'Gwenborough',
    isFav: false,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    correo: 'ervin@example.com',
    ciudad: 'Wisokyburgh',
    isFav: false,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    correo: 'clementine@example.com',
    ciudad: 'McKenziehaven',
    isFav: false,
  },
];

describe('filtrarPorNombre', () => {
  it('filtra por nombre a pesar de mayúsculas', () => {
    const resultado = filtrarPorNombre(usuarios, 'LEANNE');

    expect(resultado).toHaveLength(1);
    expect(resultado[0].name).toBe('Leanne Graham');
  });

  it('devuelve todos si la búsqueda está vacía', () => {
    expect(filtrarPorNombre(usuarios, '')).toHaveLength(3);
  });

  it('devuelve una lista vacía si no encuentra a nadie', () => {
    expect(filtrarPorNombre(usuarios, 'zzz')).toHaveLength(0);
  });
});
