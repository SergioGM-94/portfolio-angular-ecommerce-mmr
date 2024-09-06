import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../../../models/cart';
import { CartService } from '../../../../services/cart.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private _cart: Cart = {items: []};
  itemsQuantity = 0;
  userType: string | null = null;

  @Input()
  get cart(): Cart {
     return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.getUserTypeObservable().subscribe(type => {
      this.userType = type;  // Actualizar el tipo de usuario dinámicamente
      console.log('Tipo de usuario:', this.userType);
    });
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  logout() {
    this.authService.logout();
    this.userType = null;
    this.router.navigate(['/index'])
  }
}
