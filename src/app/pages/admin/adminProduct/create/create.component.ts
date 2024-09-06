import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';
import { ProductPost } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  categories: Category[] = []

  newProduct: ProductPost = {
    id: 0,
    title: '',
    price: 0.0,
    idcategory: 0,
    description: '',
    image: ''
  }

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories(): void {
    this.productService.listCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onCreate(){

    console.log('Producto a ser creado', this.newProduct);

    this.productService.create(this.newProduct)
    .subscribe(response => {
      console.log('Producto registrado con éxito:', response);
      alert('¡Producto creado exitosamente!');
      this.router.navigate(['/productList']);
    },
    error => {
      console.error('Error al registrar el producto:', error);
    });
  }

}
