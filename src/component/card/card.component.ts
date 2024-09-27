import { NgFor } from '@angular/common';
import { Component, } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  cards = [
    {
      image: 'assets/ll.jpg',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    },
    {
      image: 'assets/zz.jpg',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    },
    {
      image: 'assets/11.jpg',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    },
    {
      image: 'assets/ll.jpg',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    },
    {
      image: 'assets/ll.jpg',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    }
    
  ];
}
