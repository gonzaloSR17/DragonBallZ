import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
    declarations: [
        MainPage,
        ListComponent,
        AddCharacterComponent
    ],
    imports: [
      CommonModule, // Módulo base de Angular
      FormsModule
    ],
    exports: [
        MainPage, // Exporta los componentes que usarás fuera de este módulo
    ]
  })
  export class DbzModule { }