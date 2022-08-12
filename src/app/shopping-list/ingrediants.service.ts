import { Injectable } from '@angular/core';
import { Ingrediant } from '../models/ingrediant';

@Injectable({
  providedIn: 'root'
})
export class IngrediantsService {

  constructor() { }


  private ingrediants:Ingrediant[]=[
    new Ingrediant("rise",12),new Ingrediant("meat",3),
  ]


}
