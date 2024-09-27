import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FiltrosComponent } from "../filtros/filtros.component";

@Component({
  selector: 'app-maquillaje',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FiltrosComponent, ],
  templateUrl: './maquillaje.component.html',
  styleUrl: './maquillaje.component.css'
})
export class MaquillajeComponent {

}
