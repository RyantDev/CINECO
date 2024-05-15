import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CatalogoComponent } from './components/shared/catalogo/catalogo.component';
import { InicioComponent } from './components/shared/inicio/inicio.component'; 
import { FooterComponent } from './components/shared/footer/footer.component'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  NavbarComponent,
  CatalogoComponent,
  InicioComponent,
  FooterComponent,
  MatSlideToggleModule
 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-aplication';


}
