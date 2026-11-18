import { Component, input, output } from '@angular/core';
import { Users } from '../../interfaces/users';
import { TarjetaUsuario } from '../tarjeta-usuario/tarjeta-usuario';

@Component({
  selector: 'app-tarjetas-list',
  imports : [TarjetaUsuario],
  templateUrl: './usuarios-lista.html',
  styleUrl: './usuarios-lista.css',
})
export class UsuariosLista {
  users = input.required<Users[]>();
  listName = input.required<string>();

  favToggled = output<number>();
}