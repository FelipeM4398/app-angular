import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Region {
  id: number;
  nombre: string;
  observacion: string;
}

const REGIONES: Region[] = [
  { id: 1, nombre: 'Sur', observacion: 'Sur del país' },
  { id: 2, nombre: 'Centro', observacion: 'Centro del país' },
  { id: 3, nombre: 'Norte', observacion: 'Norte del país' },
  { id: 4, nombre: 'Occidente', observacion: 'Occidente del país' },
];

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css'],
})
export class RegionesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['id', 'nombre', 'observacion', 'accion'];
  dataSource = new MatTableDataSource(REGIONES);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
