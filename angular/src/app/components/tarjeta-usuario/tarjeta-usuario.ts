import { Component, input, output } from '@angular/core';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.html',
  styleUrl: './tarjeta-usuario.css',
})
export class TarjetaUsuario {
  user = input.required<Users>();
  favToggled = output<number>();
}