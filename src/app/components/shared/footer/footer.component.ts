import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

Direccion='Av calle 21 29-b-99 conjunto residencial los arrayanes';
Telefono='3134325429';
Correo='CINECO@gmail.com';
Nombrepr='CINECO';
fecha : number = new Date().getFullYear();
}


