import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredientt.model';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
  ingredients : Ingredient[];
  private subscription : Subscription;

  constructor(private slService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe (
     (ingredients : Ingredient[]) => {
       this.ingredients = ingredients;
     }
    );
     
    }
    onEditItem(index : number){
      this.slService.startedEditing.next(index);

    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
   
}
 