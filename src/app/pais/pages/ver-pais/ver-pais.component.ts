import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  pais!: Country;
  constructor(
    private activatedRouted: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
/*
    Al iniciar la app, traete los parametros del url que te defini en app-routing.module
 */
    // this.activatedRouted
    //   .params
    //   .subscribe( ({id}) => {
    //     this.paisService
    //       .buscarPaisPorCodigo(id)
    //       .subscribe(pais => {console.log(pais)})
    //
    //   });
    this.activatedRouted.params
      .pipe(
        //el pipe permite modificar mi subscribe de params, y poder modificar lo que tengo aqui por distintos atributos
        switchMap( ({id}) => this.paisService.buscarPaisPorCodigo(id) ),
        //en este caso estoy usando swichMap que lo que hace es retornar otro observer usando mi otro subcribe
        // y no tener un subscribe dentro de un subscribe
        tap( console.log )
        // y esto solo imprime lo que mi subcribe responde

      )
      .subscribe( pais => {this.pais = pais[0];})
  }


}
