import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritecard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './favoritecard.component.html',
  styleUrl: './favoritecard.component.css'
})
export class FavoritecardComponent {

    
    cards = [
      {
        image: 'assets/aa.jpg',
        title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
        price: 1200
      },
      {
        image: 'assets/xl.jpg',
        title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
        price: 1200
      },
      {
        image: 'assets/hh.jpg',
        title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
        price: 1200
      },
      {
        image: 'assets/xl.jpg',
        title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
        price: 1200
      },
      {
        image: 'assets/qq.jpg',
        title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
        price: 1200
      }
      
    ];
  }
  

