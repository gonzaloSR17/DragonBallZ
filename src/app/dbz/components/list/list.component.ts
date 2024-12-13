import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface'; // Importacion del objeto de character
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
@Input()
  // Necesitamos iniciar el arraylist 
  public characterList: personaje[] = [{
    name:'Trunk',
    power: 10
  }]

//onDeleteId = Index value= number,

 // Decorador OutPut que se usa para emitir
  // eventos desde un componente hijo hacia un componente
  //padre en las funcion
@Output()
public onDelete: EventEmitter<number> = new EventEmitter();


onDeteteCharacter(index:number):void{

   this.onDelete.emit(index);

  }

}
