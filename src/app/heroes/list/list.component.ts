import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heronames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string; // Asegúrate de usar el mismo nombre que en el HTML.

  removeLastHero(): void {
    this.deleteHero = this.heronames.pop(); // Almacena el héroe borrado.
    // console.log({ deleteHero: this.deleteHero }); // Depuración opcional.
  }
}

