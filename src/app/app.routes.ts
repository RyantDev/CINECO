import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/shared/catalogo/catalogo.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';

export const APP_ROUTES: Routes = [

{path: 'Catalogo', component:CatalogoComponent},
{path: 'Navbar', component:NavbarComponent},
{path: 'Inicio', component:InicioComponent},
{path: '**', pathMatch:'full', redirectTo:'Inicio'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

