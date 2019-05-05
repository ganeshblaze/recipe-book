
import { Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredientt.model'
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged =  new Subject();

 private recipes : Recipe[] =[
        new Recipe(
            'Veg-Burger',
            'A big veg burger',
            'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg',
            [
                new Ingredient('Buns',2) ,
            new Ingredient('Patty',1),
            new Ingredient ('Onions',2),
            new Ingredient('Tomatoes',1)
            ]
           
            ),
        new Recipe(
            'Italian Marconi pasta',
        'A Italian delight',
        'https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg',
        [
            new Ingredient ('Pasta',1),
            new Ingredient ('Redsauce',1)
  

        ] ) 
        ];

constructor(private slService:ShoppingService){

}
setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());

}

getRecipes() {
    return this.recipes.slice();
} 
 getRecipe(index:number) {
     return this.recipes.slice()[index];


 }
addIngredientsToShoppingList (ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);

}
 addRecipe(recipe:Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
 }

 updateRecipe(index:number, newRecipe : Recipe){
     this.recipes[index] = newRecipe;

 }

 deleteRecipe(index:number){
     this.recipes.splice(index,1);
     this.recipesChanged.next(this.recipes.slice());

 }
}