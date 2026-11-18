import { Component, inject } from '@angular/core';
import { CampoBusqueda } from '../../components/campo-busqueda/campo-busqueda';
import { UsuariosServicio } from '../../services/usuarios';
import { UsuariosLista } from '../../components/usuarios-lista/usuarios-lista';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  imports: [UsuariosLista, CampoBusqueda],
})
export class Inicio {
  service = inject(UsuariosServicio);
  constructor() { this.service.load(); }

}
