import { Component, OnInit} from "@angular/core";

@Component({
    selector:'app-counter',
    template:
    `
    <h3>Counter:{{counter}}</h3>

    <button (click)="decrementaClick()">-1</button>
    <button (click)="incrementaClick()">+1</button>
    <button (click)="resetClick()">reset</button>
    `
        
        
              
})

export class CounterComponent{
    constructor(){
    }

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