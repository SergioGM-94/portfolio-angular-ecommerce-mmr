import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../../../../models/category';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit, OnDestroy{
  @Output() showCategory = new EventEmitter<number>();

  categoriesSubscription: Subscription | undefined;

  categories: Array<Category> | undefined;


  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.categoriesSubscription =  this.storeService.getAllCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  onShowCategory(category: number): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
