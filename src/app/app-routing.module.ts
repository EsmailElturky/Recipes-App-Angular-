import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDetailComponent } from './app-recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './app-recipes/recipes-edit/recipes-edit.component';
import { RecipesComponent } from './app-recipes/recipes.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes:Routes=[
  {path:'',pathMatch:"full",redirectTo:'/recipes'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:':id/detail',component:RecipesDetailComponent},
    {path:':id/edit',component:RecipesEditComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent}
]



@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
