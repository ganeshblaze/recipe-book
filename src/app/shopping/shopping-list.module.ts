import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './shopping.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({

    declarations : [
        ShoppingComponent,
        ShoppingEditComponent
    ],
    imports : [
        CommonModule,
        FormsModule
    ],
    
})
export class ShoppingListModule {

}