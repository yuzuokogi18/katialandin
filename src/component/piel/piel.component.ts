import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FavoritecardComponent } from "../favoritecard/favoritecard.component";
import { FiltrosComponent } from "../filtros/filtros.component";
import { CardpielComponent } from "../cardpiel/cardpiel.component";

@Component({
  selector: 'app-piel',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FavoritecardComponent, FiltrosComponent, CardpielComponent],
  templateUrl: './piel.component.html',
  styleUrl: './piel.component.css'
})
export class PielComponent {

}
