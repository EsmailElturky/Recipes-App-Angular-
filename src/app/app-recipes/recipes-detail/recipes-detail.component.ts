import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from '../recipe.service';

// import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private recipeService:RecipeService) { };
  public recipe:Recipe;
  id:number;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getSelectedRecipe(this.id);
      }
    )

  }

}
