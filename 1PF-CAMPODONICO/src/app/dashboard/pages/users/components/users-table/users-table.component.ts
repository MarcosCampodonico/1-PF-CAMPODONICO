import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  tabla1Data = [
    {n: 1, nombre: 'Desarrollo Front-End', modalidad: 'virtual'},
    {n: 2, nombre: 'Desarrollo Backend', modalidad: 'virtual'},
    {n: 3, nombre: 'Data Scientist', modalidad: 'virtual'},
    {n: 4, nombre: 'Data Analitycs', modalidad: 'virtual'}
  ]
  displayedColumns: string[] = ['id', 'fullName','carrera', 'email', 'linkedin','eliminar-usuario']; 
  
  @Input()
  dataSource: User[] = [];
  @Output()
  deleteUser = new EventEmitter<User>();
  mostarCarrera: boolean = false;
  mostrarTabla: boolean = true;
  toggleTabla () {
    this.mostrarTabla = !this.mostrarTabla;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Desarrollo Front-end', weight: 1, symbol: 'H'},
  {position: 2, name: 'Desarrollo Backend', weight: 1, symbol: 'He'},
]
export class TableColumnStylingExample {
  displayedColumns: string[] = ['n°', 'titulo', 'modalidad', 'duracion'];
  dataSource = ELEMENT_DATA;
}