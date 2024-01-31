import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(){}
  loading:boolean = true
  drinks: any
  lettersDrinks!: string
  modalChange: boolean = false
  itemCocktail: any
  async searchDrinks(){
    console.log(this.lettersDrinks)
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.lettersDrinks}`).then(res=>{
        this.drinks = res.data.drinks
        console.log(res)
      })
  }
  onClose(valor: boolean){
    this.modalChange = false
  }
  modalOpen(item:any){
    this.itemCocktail= item
    this.modalChange = true
  }

  ngOnInit(): void {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then(res=>{
        this.drinks = res.data.drinks
      })
      setTimeout(()=>{
        this.loading = false
      }, 3000)
  }
}
