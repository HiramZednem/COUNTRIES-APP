import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  //Esto creo un evento llamado onEnter, y cuando este es disparado le manda la info al componente padre que siempre tiene
  //que estar a la escucha de esta informacion
  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;

  debouncer: Subject<string> = new Subject();

  termino:string  = '';

  ngOnInit(): void {
    this.debouncer
    //Esperate 300m de segundos para mandar el evento
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor )
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }


}
