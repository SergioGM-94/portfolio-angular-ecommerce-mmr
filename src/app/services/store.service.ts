import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

const STORE_BASE_URL = 'https://portfolio-ecommerce-mmr.onrender.com';
// const STORE_BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(category?: number, sort?: string): Observable<Array<Product>> {

    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/api/product?${category ? 'categoryId=' + category + '&' : ''}${sort ? 'sort=' + sort : ''}`
    )
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(
      `${STORE_BASE_URL}/api/category`
    )
  }
}
