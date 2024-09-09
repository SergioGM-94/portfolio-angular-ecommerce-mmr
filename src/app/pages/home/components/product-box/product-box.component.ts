import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  constructor(){}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
    console.log(this.product);
  }
}
