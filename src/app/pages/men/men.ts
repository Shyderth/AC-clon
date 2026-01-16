import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Carousel, CarouselItem} from '../../components/carousel/carousel';

@Component({
  selector: 'app-men',
  imports: [CommonModule, Carousel],
  templateUrl: './men.html',
  styleUrl: './men.css',

})
export class Men {

   titulo: string = "Hombres";
  //TODO: Cambiar las categorias
  menSubCategories: CarouselItem[] = [
    { id: "0", name: "Polos", imageUrl: "/classic-polo-shirt.png" },
    { id: "1", name: "Camisas", imageUrl: "/classic-dress-shirt.png" },
    { id: "2", name: "Trajes", imageUrl: "/classic-navy-suit.png" },
    { id: "3", name: "Camisetas", imageUrl: "/plain-white-tshirt.png" },
    { id: "4", name: "Jeans", imageUrl: "/folded-denim-stack.png" },
    { id: "5", name: "Zapatos", imageUrl: "/slideZapatos.webp" },
    { id: "6", name: "Pantalones", imageUrl: "/various-styles-of-pants.png" }
  ]

}
