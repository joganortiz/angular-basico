import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0
  }

  constructor(private dbz:DbzService){}
  //@Output() onNewPerson: EventEmitter<Personajes> = new EventEmitter();

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo)
    //this.onNewPerson.emit(this.nuevo)
    this.dbz.agregarPersonajes(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
