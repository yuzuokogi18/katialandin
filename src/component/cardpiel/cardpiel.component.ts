import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cardpiel',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cardpiel.component.html',
  styleUrl: './cardpiel.component.css'
})
export class CardpielComponent {
  isProductDropdownVisible = false;
  isBrandDropdownVisible = false;
  isPriceDropdownVisible = false;
  isAvailabilityDropdownVisible = false;
  cards = [
    {
      image: 'assets/P...JPG',
      title: 'Toallas Desmaquillantes',
      price: 32.50
    },
    {
      image: 'assets/P...JPG',
      title: 'Miss Lulu Leather Look Weave Effect Shoulder Bag - Black',
      price: 1200
    },
    {
      image: 'assets/P....JPG',
      title: 'Serum',
      price: 98
    },
    {
      image: 'assets/P.....JPG',
      title: 'Mascarilla Pop Skin Care Facial de Tela',
      price: 7.00
    },
    {
      image: 'assets/P......JPG',
      title: 'Toallas Desmaquillantes',
      price: 26.00
    },  {
      image: 'assets/P.......JPG',
      title: 'Balanceador PG',
      price: 72.50
    },
    {
      image: 'assets/P........JPG',
      title: 'Serum de Vitamina C',
      price: 85.00
    },
    {
      image: 'assets/P.........JPG',
      title: 'Almohadillas de Gel Relajante Para los Ojos',
      price: 1200
    },
    {
      image: 'assets/P...........JPG',
      title: 'Colageno',
      price: 944
    },
    {
      image: 'assets/P............JPG',
      title: 'Gel Limpiador Facial Tea Tree Lavanda',
      price: 150.00
    }
  ];

  toggleDropdown(dropdown: string) {
    switch (dropdown) {
      case 'productDropdown':
        this.isProductDropdownVisible = !this.isProductDropdownVisible;
        break;
      case 'brandDropdown':
        this.isBrandDropdownVisible = !this.isBrandDropdownVisible;
        break;
      case 'priceDropdown':
        this.isPriceDropdownVisible = !this.isPriceDropdownVisible;
        break;
      case 'availabilityDropdown':
        this.isAvailabilityDropdownVisible = !this.isAvailabilityDropdownVisible;
        break;
    }
  }
}


