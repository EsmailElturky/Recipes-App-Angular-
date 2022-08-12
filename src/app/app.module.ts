import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './app-recipes/recipes.component';
import { RecipeItemComponent } from './app-recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesEditComponent } from './app-recipes/recipes-edit/recipes-edit.component';
import { RecipesDetailComponent } from './app-recipes/recipes-detail/recipes-detail.component';
import { RecipeListComponent } from './app-recipes/recipe-list/recipe-list.component';
import { DropdownDirective } from './shared/dropdowndirective';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipesEditComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipeListComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
