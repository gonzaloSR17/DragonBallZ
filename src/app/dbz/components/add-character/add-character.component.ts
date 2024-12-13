import { Component, EventEmitter, Output } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html'
  })

  // TS donde configuramos el formulario
  // Exporta esta clase
  export class AddCharacterComponent {
 // Decorador OutPut que se usa para emitir
  // eventos desde un componente hijo hacia un componente
  // en la funcion

  @Output()
  public nuevoPersonaje: EventEmitter<personaje> = new EventEmitter();
// Eventmitter lo usamos para exponer un evento desde el componente hijo
// habra una funcion eventEmitter de dentro sera como un listener y ejecutara las iguiente funcion

// podemos inicializar el objeto ya
public newPersonaje: personaje = {
    name:'',
    power: 0 
  };

  // Funcion para añadir el personaje a la lista
  anadirPersonaje():void{

    if (this.newPersonaje.name.length === 0) return;

    this.nuevoPersonaje.emit(this.newPersonaje);

    this.newPersonaje={ name: '', power:0};

  }

  }  