import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Sneakers',
    price: 50,
    quantity: 2,
    id: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Sneakers',
    price: 150,
    quantity: 4,
    id: 2
  }]};

  dataSource: Array<CartItem> = [];

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService, private http: HttpClient){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFormCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  // onCheckout(): void{
  //   this.http.post('http://localhost:4242/checkout', {
  //     items: this.cart.items
  //   }).subscribe(async (res: any) => {
  //     let stripe = await loadStripe('pk_test_51PqQaz07LLyEzcVKvRAquOROsNlscMzlsvOnLXjE9FVF2KmErpgrS9BegFwmSjM5jTUWS2SzjmwZouI4isJP6D4C008jw8bDTc');
  //     stripe?.redirectToCheckout({
  //       sessionId: res.id
  //     })
  //   })
  // }
}
