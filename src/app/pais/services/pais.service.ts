import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private api: string = 'https://restcountries.com/v3.1/';

  constructor( private httpClient: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.api }/name/${ termino }`;
    return this.httpClient.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.api }/capital/${ termino }`;
    return this.httpClient.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.api }/region/${ region }`;
    return this.httpClient.get<Country[]>( url );
  }

  buscarPaisPorCodigo( id: string ) {
    const url = `${ this.api }/alpha/${ id }`;
    return this.httpClient.get<Country[]>( url );
  }
}
