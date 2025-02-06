import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductPost } from '../models/product';
import { Category } from '../models/category';

const STORE_BASE_URL = 'https://portfolio-ecommerce-mmr.onrender.com';
// const STORE_BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  listProducts(sort?: string, category?: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/api/product?${category ? 'categoryId=' + category + '&' : ''}${sort ? 'sort=' + sort : ''}`
    )
  }

  listCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(
      `${STORE_BASE_URL}/api/category`
    )
  }

  public create(product: ProductPost): Observable<any> {
    return this.httpClient.post<any>(`${STORE_BASE_URL}/api/product`, product);
    }

  public getProduct(id: number): Observable<ProductPost> {
    return this.httpClient.get<ProductPost>(`${STORE_BASE_URL}/api/product/${id}`);
    }

  public update(id:number, product: ProductPost): Observable<any> {
    return this.httpClient.put(`${STORE_BASE_URL}/api/product/${id}`, product);
    }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${STORE_BASE_URL}/api/product/${id}`);
    }

}
