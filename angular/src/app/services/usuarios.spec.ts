import { TestBed } from '@angular/core/testing';
import { UsuariosServicio } from './usuarios';

describe('Usuarios', () => {
  let service: UsuariosServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
