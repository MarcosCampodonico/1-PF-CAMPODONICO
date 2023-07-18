import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';



export interface studyRace {
  carrera: string;
  duracion: number;
  modalidad: string;
  
}
const ELEMENT_DATA: studyRace[] = [
  {carrera: 'desarrollador Front-end', duracion: 1, modalidad: 'remoto'},
  {carrera: 'desarrollador backend', duracion: 1, modalidad: 'remoto'},
  {carrera: 'data scientist', duracion: 2, modalidad: 'remoto'}
];
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
  
})
export class UsersTableComponent {
  
  displayedColumns: string[] = ['id', 'fullName','carrera', 'email', 'linkedin','eliminar-usuario']; 
  displayedColumns1: string [] = ['carrera', 'duracion', 'modalidad']
  dataSource1=ELEMENT_DATA
  @Input()
  dataSource: User[] = [];
  @Output()
  deleteUser = new EventEmitter<User>();
  
  tablaVisible: boolean = true;
  TablaVisibilidad(): void {
  this.tablaVisible = !this.tablaVisible;
}


  mostrarTabla: boolean = true;
  toggleTabla () {
    this.mostrarTabla = !this.mostrarTabla;
  }
 
}




