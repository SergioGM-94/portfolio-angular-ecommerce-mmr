import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  description: string;
  image: string;
  categoryObj: Category;
}

export interface ProductPost {
id: number;
title: string;
price: number;
categoryId: number;
description: string;
image: string;
}
