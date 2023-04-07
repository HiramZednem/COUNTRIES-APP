import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
    this.activatedRouted
      .params
      .subscribe( ({id}) => {
        this.paisService
          .buscarPaisPorCodigo(id)
          .subscribe(pais => {console.log(pais)})

      });
  }


}
