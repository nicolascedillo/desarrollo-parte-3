import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampoBusqueda } from '../app/components/campo-busqueda/campo-busqueda'

@Component({
  imports: [RouterOutlet, CampoBusqueda],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular');
}
