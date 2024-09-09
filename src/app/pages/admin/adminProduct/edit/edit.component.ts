import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';
import { Product, ProductPost } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  categories: Category[] = []

  product: ProductPost = {
    id: 0,
    title: '',
    price: 0.0,
    idcategory: 0,
    description: '',
    image: ''
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.listCategories();
    this.getProduct();
  }

  listCategories(): void {
    this.productService.listCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getProduct() {
    const id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(
      response => {this.product = response}
    );
  }

  onEdit() {
    this.productService.update(this.product.id, this.product).
    subscribe(response => {
      console.log('Producto actualizado con éxito:', response);
      this.router.navigate(['/productList']);
      alert('¡Producto actualizado exitosamente!');
    },
    error => {
      console.error('Error al actualizar producto:', error);
    }
  );
  }
}
