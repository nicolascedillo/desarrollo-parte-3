import { describe, it, expect } from 'vitest';
import { buscarUsuario } from './buscarUsuario';

const usuarios = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
    { id: 3, name: 'Clementine Bauch' },
];

describe('buscarUsuario', () => {
    it('filtra por nombre a pesar de mayusclas', () => {
        const resultado = buscarUsuario(usuarios, 'LEANNE');
        expect(resultado).toHaveLength(1);
        expect(resultado[0].name).toBe('Leanne Graham');
    });

    it('devuelve todos si la busqueda esta vacia', () => {
        expect(buscarUsuario(usuarios, '')).toHaveLength(3);
    });

    it('devuelve lista vacia si no encuentra a nadie', () => {
        expect(buscarUsuario(usuarios, 'zzz')).toHaveLength(0);
    });
});