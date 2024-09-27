import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { FavoritecardComponent } from '../favoritecard/favoritecard.component';
import { ImagenComponent } from '../imagen/imagen.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, RouterLink, FavoritecardComponent, ImagenComponent, FooterComponent, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
