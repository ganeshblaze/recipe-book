import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,

    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
