import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';
import { PageEvent } from '@angular/material/paginator';

const ROWS_HEIGHT: {[id: number]: number} = {1: 420, 3: 420, 4: 450};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: number | undefined;
  products: Array<Product> | undefined;
  paginatedProducts: Array<Product> | undefined;
  sort = 'asc';
  count = '12';
  pageSize = 10;
  currentPage = 0;
  totalProducts = 0;

  productsSubscription: Subscription | undefined;

constructor(private cartService: CartService, private storeService: StoreService){}

ngOnInit(): void {
  this.getProducts();
}

getProducts(): void {
  this.productsSubscription = this.storeService.getAllProducts(this.category, this.sort)
  .subscribe((_products) => {
    this.products = _products;
    this.totalProducts = this.products.length;
    this.paginateProducts();
    console.log(this.products);
  });
}

paginateProducts(): void {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedProducts = this.products?.slice(startIndex, endIndex);
}

onColumnsCountChange(colsNum: number): void{
  this.cols = colsNum;
  this.rowHeight = ROWS_HEIGHT[this.cols];
}

onShowCategory(newCategory: number): void{
  this.category = newCategory;
  this.getProducts();
}

onAddToCart(product: Product): void{
  this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
  })
}

// onItemsCountChange(newCount: number):void {
//   this.count = newCount.toString();
//   this.getProducts();
// }

onItemsCountChange(newCount: number):void {
  this.pageSize = newCount;
  this.getProducts();
}

onSortChange(newSort: string): void{
  this.sort = newSort;
  this.getProducts();
}

onPageChange(event: PageEvent): void {
  this.pageSize = event.pageSize;
  this.currentPage = event.pageIndex;
  this.paginateProducts();
}

ngOnDestroy(): void {
  if(this.productsSubscription) {
    this.productsSubscription.unsubscribe();
  }
}
}
