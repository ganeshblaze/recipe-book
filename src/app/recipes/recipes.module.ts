


import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
 declarations:[
     RecipesComponent,
     RecipeStartComponent,
     RecipeEditComponent,
     RecipeListComponent,
     RecipeDetailsComponent,
     RecipeItemComponent,
     
 ],
 imports:[
     CommonModule,
     ReactiveFormsModule,
     RecipeRoutingModule,
     SharedModule
 ]


})
export class RecipeModule {}