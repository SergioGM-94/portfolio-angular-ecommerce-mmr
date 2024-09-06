import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  idcategory: number;
  description: string;
  image: string;
  objCategoria: Category;
}

export interface ProductPost {
id: number;
title: string;
price: number;
idcategory: number;
description: string;
image: string;
}
