import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'Recipe';
  ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyCJR22-GzrxN926a7BNmDX7Ne0VTwIxPZI",
    authDomain: "recipe-book-7ff82.firebaseapp.com",



});


  }
  onNavigate ( feature :string){
    this.loadedFeature = feature;
  }



  title = 'Recipe';
}
