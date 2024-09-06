import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductPost } from '../models/product';
import { Category } from '../models/category';

const STORE_BASE_URL = 'https://portfolio-ecommerce-mmr.onrender.com';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  listProducts(sort?: string, category?: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/api/Producto?${category ? 'idcategory=' + category + '&' : ''}${sort ? 'sort=' + sort : ''}`
    )
  }

  listCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(
      `${STORE_BASE_URL}/api/Categoria`
    )
  }

  public create(product: ProductPost): Observable<any> {
    return this.httpClient.post<any>(`${STORE_BASE_URL}/api/Producto`, product);
    }

  public getProduct(id: number): Observable<ProductPost> {
    return this.httpClient.get<ProductPost>(`${STORE_BASE_URL}/api/Producto/${id}`);
    }

  public update(id:number, product: ProductPost): Observable<any> {
    return this.httpClient.put(`${STORE_BASE_URL}/api/Producto/${id}`, product);
    }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${STORE_BASE_URL}/api/Producto/${id}`);
    }

}
