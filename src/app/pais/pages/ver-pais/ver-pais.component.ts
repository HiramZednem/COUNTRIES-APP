import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
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
        switchMap( ({id}) => this.paisService.buscarPaisPorCodigo(id) )
        //el pipe permite modificar mi subscribe de params, y poder retornar otro observer y no tener un subscribe dentro de un subscribe
      )
      .subscribe( response => {
          console.log(response)
      })
  }


}
