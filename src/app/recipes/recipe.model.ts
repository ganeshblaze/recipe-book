import { Ingredient} from '../shared/ingredientt.model';

export class Recipe {
     public name : string;
     public description :string;
     public ImagePath : string;
     public ingredients : Ingredient[];


     constructor (name:string, desc:string,ImagePath :string, ingredients:Ingredient[]) {
       this.name = name;
       this.description = desc;
       this.ImagePath = ImagePath;
       this.ingredients = ingredients;
       
     }
} 