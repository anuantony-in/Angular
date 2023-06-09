import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipeSelected = new EventEmitter<Recipe>();

/*   private recipes:Recipe[] = [
    new Recipe('Chicken Biriyani',
    'Indian/Arabic food made using rice & chicken',
    'https://images.t-online.de/2021/06/90189092v2/0x92:1773x997/fit-in/768x0/biryani-das-reisgericht-ist-eines-der-bekanntesten-indischen-gerichte.jpg',
    [
      new Ingredient('Rice',500),
      new Ingredient('Chicken',1000),
      new Ingredient('Whole Spices',100)
    ]),

    new Recipe('Fried Chicken',
    'American invented fast food made of chicken',
    'https://recipe30.com/wp-content/uploads/2020/05/Fried-chicken-848x477.jpg',
    [
      new Ingredient('Oil',500),
      new Ingredient('Chicken',1000),
      new Ingredient('All purpose flour',100)
    ])]; */

    private recipes:Recipe[] = [];
    
    constructor(private slService:ShoppingListService){}

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes () {
      return this.recipes.slice();
    }

    getRecipe(index:number) {
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] =  newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number) {
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
