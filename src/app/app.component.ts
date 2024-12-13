import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string='Hola mundo bebé'

  public counter: number =10;

  incrementaClick():void{
    this.counter++;
  }

  decrementaClick():void{
    this.counter--;
  }

  resetClick():void{
    this.counter=10;
  }


}

