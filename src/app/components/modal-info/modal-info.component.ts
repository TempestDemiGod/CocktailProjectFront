import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit{
  urlImg!: String 
  backgroundCard!: string
  name: string = ''
  instruction : string = ''
  cocktail!: any
  limitIngredientes:Array<any> = []
  limitCant:Array<any> = []

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() cocktaildetaile: any


  closeModal(){
    this.close.emit(false);
  }

  setItems(){
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient1)
    this.limitCant.push(this.cocktaildetaile.strMeasure1)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient2)
    this.limitCant.push(this.cocktaildetaile.strMeasure2)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient3)
    this.limitCant.push(this.cocktaildetaile.strMeasure3)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient4)
    this.limitCant.push(this.cocktaildetaile.strMeasure4)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient5)
    this.limitCant.push(this.cocktaildetaile.strMeasure5)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient6)
    this.limitCant.push(this.cocktaildetaile.strMeasure6)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient7)
    this.limitCant.push(this.cocktaildetaile.strMeasure7)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient8)
    this.limitCant.push(this.cocktaildetaile.strMeasure8)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient9)
    this.limitCant.push(this.cocktaildetaile.strMeasure9)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient10)
    this.limitCant.push(this.cocktaildetaile.strMeasure10)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient11)
    this.limitCant.push(this.cocktaildetaile.strMeasure11)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient12)
    this.limitCant.push(this.cocktaildetaile.strMeasure12)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient13)
    this.limitCant.push(this.cocktaildetaile.strMeasure13)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient14)
    this.limitCant.push(this.cocktaildetaile.strMeasure14)
    this.limitIngredientes.push(this.cocktaildetaile.strIngredient15)
    this.limitCant.push(this.cocktaildetaile.strMeasure15)
  }

  ngOnInit(): void {
    this.urlImg  = this.cocktaildetaile.strDrinkThumb
    // "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
    this.backgroundCard = `background-image: url(${this.urlImg});`
    this.setItems()
    this.name = this.cocktaildetaile.strDrink
    this.instruction = this.cocktaildetaile.strInstructions


  }
}
