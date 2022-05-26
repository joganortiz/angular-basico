import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo: Personajes = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  // get personajes(): Personajes[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento : Personajes) {
  //   this.personajes.push(argumento)
  // }
 
  constructor(){
  }
}
