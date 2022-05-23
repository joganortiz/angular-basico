import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Superman', 'Thor'];
 heroeBorrado: string = '';

  borrarHeroe() {
    const heroeBorrado_1 = this.heroes.shift()

    //console.log(heroeBorrado_1)
    this.heroeBorrado = heroeBorrado_1 || '';
  }

}
