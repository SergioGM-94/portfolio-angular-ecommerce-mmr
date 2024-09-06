import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-angular-ecommerce-mmr';

  cart: Cart = {items:[]}

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart
    })
  }
}
