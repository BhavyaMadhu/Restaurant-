import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
     {
      name: 'uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      description: 'A unique combination of Indian uthappam (pancake) and Italian pizza, topped with cerignola olives, ripe vine cherry tomatoes, vidalia onions, Guntur chillies and buffalo paneer. ',
     },
     {
      name: 'zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'mains',
      label: 'Hot',
      price: '5.99',
      description: 'Deep fried zucchini coated with mildly spiced chickpea flour batter accompanied with a sweet-tangy tamarind sauce', 
      },
      {
      name: 'vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer', 
      label: 'New',
      price: '2.99',
      description: 'A quintessential conFusion experience, is it a vada or it is a donut?'
      },  
      {
      name: 'Elaicheese cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'desert',
      label: ' ',
      price: '2.99',
      description: 'A delectable, semi-sweet new york style cheese cake, with graham cracker crust and spiced with Indian cardamoms'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
