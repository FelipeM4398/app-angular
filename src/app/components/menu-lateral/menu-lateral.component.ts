import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {
  links = [
    {
      name: 'Tabla Parametros',
      route: 'regiones',
      sublinks: ['Regiones', 'Base de Tiempo', 'Categoria', 'Ciudad'],
    },
    { name: 'Gestionar estaciones', route: 'estaciones', sublinks: [] },
    { name: 'Gestionar mantenimientos', route: 'mantenimientos', sublinks: [] },
    { name: 'Reportes', route: 'reportes', sublinks: [] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
