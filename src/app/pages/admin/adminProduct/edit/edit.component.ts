import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  categories: Category[] = [];

  products: Product[] = []

  categoryFilter: number = 0;

  sort: 'asc' | 'desc' = 'desc';

  sortField: string = 'title';

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.productService.listCategories().subscribe(data => {
      this.categories = data;
      });

    this.listProducts();

    this.onToggleSort();
  }

  listProducts(): void {
    this.productService.listProducts(this.sort, this.categoryFilter).subscribe(data => {
      this.products = data;
    });
  }

  editProduct(id: number) {
    this.router.navigate(['/productEdit', id])
  }

  onDelete(id: number) {
    this.productService.delete(id).subscribe(
      response => {
        console.log(response);
        this.listProducts();
        alert('Producto eliminado exitosamente!');
      },
      error => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  filterByCategory(){
    if (this.categoryFilter) {
      this.productService.listProducts(this.sort, this.categoryFilter).subscribe(data => {
        this.products = data;
      });
    } else {
      this.listProducts();
    }
  }

  onToggleSort() {
    this.sort = this.sort === 'asc' ? 'desc' : 'asc';
    this.listProducts();
  }

}
