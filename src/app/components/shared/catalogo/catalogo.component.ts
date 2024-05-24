import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

title : string ='pelicula.title';
peliculas  = [
      { title: 'silent', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'memoi', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'titulopeli', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'DAR', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'BL', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'MARIO', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'HOL', imageUrl: 'assets/img/kimetsu.jpg'},
      { title: 'HAL', imageUrl: 'assets/img/kimetsu.jpg'},
];
      }