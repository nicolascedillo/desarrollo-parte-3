import { Component , inject} from '@angular/core';
import { UsuariosServicio } from '../../services/usuarios';

@Component({
  selector: 'app-campo-busqueda',
  styleUrl: './campo-busqueda.css',
  templateUrl: './campo-busqueda.html',
})
export class CampoBusqueda {
  service = inject(UsuariosServicio)
}


