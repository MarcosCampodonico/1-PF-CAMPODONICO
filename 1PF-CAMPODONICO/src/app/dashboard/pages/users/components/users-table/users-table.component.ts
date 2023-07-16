import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'fullName','carrera', 'email', 'linkedin','eliminar-usuario']; 

  @Input()
  dataSource: User[] = [];
  @Output()
  deleteUser = new EventEmitter<User>();
}
