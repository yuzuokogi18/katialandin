import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  isProductDropdownVisible = false;
  isBrandDropdownVisible = false;
  isPriceDropdownVisible = false;
  isAvailabilityDropdownVisible = false;
  cards = [
    {
      image: 'assets/M..JPG',
      title: 'Exhibidor Labial Mousse Matte',
      price: 4392
    },
    {
      image: 'assets/M...JPG',
      title: 'Kit de brochas onix con 39 piezas',
      price: 2555
    },
    {
      image: 'assets/M....JPG',
      title: 'Caja pr Contornos,Iluminadores y Rubores Liquidos',
      price: 2500
    },
    {
      image: 'assets/M.....JPG',
      title: 'Exhibidor Tintaline',
      price: 1759
    },
    {
      image: 'assets/M......JPG',
      title: 'Tratamiento Estimulador de Crecimieto',
      price: 1200
    },  {
      image: 'assets/M.......JPG',
      title: 'Caja de PR Balsamo Stay Blushin Cute',
      price: 798
    },
    {
      image: 'assets/M........JPG',
      title: 'Exhibidor Tintas Kiss Profs',
      price: 783
    },
    {
      image: 'assets/M..........JPG',
      title: 'Set de Brochas con 24 Piezas',
      price: 665
    },
    {
      image: 'assets/M...........JPG',
      title: 'Sombras Liquidas Rosy McMichael',
      price: 576
    },
    {
      image: 'assets/M............JPG',
      title: 'Paleta de Rostro ',
      price: 485
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
