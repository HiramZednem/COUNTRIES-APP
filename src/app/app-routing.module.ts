import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {//CONFIGURACION DE LA RUTA PRINCIPAL
    path: '', //Cuando yo este en esta ruta osea -> localhost:4200/''
    component: PorPaisComponent, //renderiza este
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id', //esto es para que le pueda mandar pais/mexico y asi, los dos puntos cacha el parametro de id
    component: VerPaisComponent
  },{
    path: '**', //Aqui es cuando entra a una ruta que no existe, se puede redireccionar o saltar un 'oye papi esa ruta no existe'
    redirectTo: ''
    //component: 404component
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes) // oye papi inyecta estas rutas de manera global para que puedan ser usadas, solo tenemos un for root en la app, si creamos mas rutas es para los hijas
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
