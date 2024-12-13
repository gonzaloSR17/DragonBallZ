import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  constructor(){
  }

  public name:string='Ironman';

  public age: number =45;

  public descripcion:string='Batman pero mejor';

  public nameUpper:string = this.name.toUpperCase();

  

  getHeroeDescription():string{
    return this.descripcion;
  }

  




}
