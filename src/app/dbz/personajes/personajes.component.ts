import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes: Personajes[] = [];
  
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(public dbzService: DbzService) {

  }
}
