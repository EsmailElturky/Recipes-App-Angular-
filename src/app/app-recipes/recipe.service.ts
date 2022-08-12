import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import{Ingrediant} from '../models/ingrediant';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }


  
  private recipes:Recipe[]=[
            new Recipe("a test recipe","test desc",
        "https://eatingrichly.com/wp-content/uploads/2020/09/bouillabaisse-seafood-stew-1847.jpg"
        ,[new Ingrediant("reise",12),new Ingrediant("meat",3),new Ingrediant("tomatos",5)]),
      
        new Recipe("the 2nd recipe","2nd Recipe description",
        "https://natashaskitchen.com/wp-content/uploads/2020/02/Juicy-Meatballs-Recipe-1.jpg",
        [new Ingrediant("vegtables",5),new Ingrediant("orange",4)])];

  getRecipes(){
    return this.recipes;
  }
   
  getSelectedRecipe(id:number){
    return this.recipes[id];
  }


}
