import {Component} from '@angular/core'

@Component({
   selector: 'app-contador',
   template: `
   <h1>{{title}}</h1>

<h5>la base es 1</h5>
<button (click)="incrementar()">+1</button>

<span>{{numero1}}</span>

<button (click)="decrementar()">-1</button>

<h5>la base es {{base}}</h5>
<button (click)="sumar5()">+{{base}}</button>

<span>{{numero2}}</span>

<button (click)="restar5()">-{{base}}</button>
   
   `
})


export class ContadorComponent {

   title: string = 'Contador App';
   numero1: number = 0;
   numero2: number = 0;
   base: number = 5;

   incrementar() {

      this.numero1 = this.numero1 + 1;
      //console.log(numero)
      //return this.numero;
   }

   decrementar() {
      let resul = this.numero1 - 1;
      this.numero1 = (resul <= 0) ? 0 : resul
      //return this.numero;
   }

   sumar5() {
      this.numero2 = this.numero2 + this.base;
   }

   restar5() {
      let resul = this.numero2 - this.base;
      this.numero2 = (resul <= 0) ? 0 : resul
   }
}