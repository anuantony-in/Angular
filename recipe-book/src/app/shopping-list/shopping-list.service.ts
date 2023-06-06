import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter} from '@angular/core';
import { Subject } from "rxjs";
export class ShoppingListService {

  ingredientsChanged =  new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients:Ingredient[] = [
    new Ingredient('Rice',100),
    new Ingredient('Chicken',500)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients); //ES6 Feature to add elements one by one
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index :number, newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
