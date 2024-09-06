import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

const STORE_BASE_URL = 'https://portfolio-ecommerce-mmr.onrender.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(category?: number, sort?: string): Observable<Array<Product>> {

    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/api/Producto?${category ? 'idcategory=' + category + '&' : ''}${sort ? 'sort=' + sort : ''}`
    )
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(
      `${STORE_BASE_URL}/api/Categoria`
    )
  }
}
