import { Component } from '@angular/core';
import {Carousel, CarouselItem} from '../../components/carousel/carousel';

@Component({
  selector: 'app-kids',
  imports: [
    Carousel
  ],
  templateUrl: './kids.html',
  styleUrl: './kids.css',
})
export class Kids {
  titulo: string = "Niños";

  //TODO: Cambiar categorias
  kidsSubCategories: CarouselItem[] = [
    { id: "0", name: "Polos", imageUrl: "/classic-polo-shirt.png" },
    { id: "1", name: "Camisas", imageUrl: "/classic-dress-shirt.png" },
    { id: "2", name: "Trajes", imageUrl: "/classic-navy-suit.png" },
    { id: "3", name: "Camisetas", imageUrl: "/plain-white-tshirt.png" },
    { id: "4", name: "Jeans", imageUrl: "/folded-denim-stack.png" },
    { id: "5", name: "Zapatos", imageUrl: "/slideZapatos.webp" },
    { id: "6", name: "Pantalones", imageUrl: "/various-styles-of-pants.png" }
  ];

}
