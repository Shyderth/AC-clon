import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchQuery: string = '';
  cartCount: number = 2;

  categories = [
    {id:1, name: 'Hombres', link: '/men'},
    {id:2, name: 'Mujeres', link: '/women'},
    {id:3, name: 'Niños', link: '/kids'},
    {id:4, name: 'Accesorios', link: '/accessories'},
    {id:5, name: 'SALE', link: '/sale', isSale: true},
  ];

  onSearch() {
    if(this.searchQuery.trim()) {
      console.log('search for',this.searchQuery);
    }
  }
  goToProfile(): void {
    console.log('Navigate to profile');
    // Handle profile navigation
  }

  goToCart(): void {
    console.log('Navigate to cart');
    // Handle cart navigation
  }
}
