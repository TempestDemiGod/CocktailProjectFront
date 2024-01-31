import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() cocktailDetaile:any
  urlImg!: String 
  name!: string 

  constructor(){}

  ngOnInit(): void {
      this.name = this.cocktailDetaile.strDrink
      this.urlImg = this.cocktailDetaile.strDrinkThumb
  }
}
