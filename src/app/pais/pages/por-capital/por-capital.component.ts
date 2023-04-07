import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) {}
  buscar( terminoBusqueda: string ) {
    this.termino = terminoBusqueda;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises) => {
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

}
