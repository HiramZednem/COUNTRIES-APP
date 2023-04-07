import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent {
  //Esto creo un evento llamado onEnter, y cuando este es disparado le manda la info al componente padre que siempre tiene
  //que estar a la escucha de esta informacion
  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  termino:string  = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }
}
