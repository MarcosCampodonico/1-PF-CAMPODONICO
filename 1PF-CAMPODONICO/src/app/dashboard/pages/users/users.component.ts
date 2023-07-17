import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';

const ELEMENT_DATA: User[] = [
  
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users: User[] = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {
    
  }

  onCreateUser(): void {
    this.matDialog

      .open(UserFormDialogComponent)
      
      .afterClosed()
      
      .subscribe({
        next: (v) => {
          if (v) {
            this.users = [
              ...this.users,
              {
                id: this.users.length + 1,
                name: v.name,
                email: v.email,
                password: v.password,
                surname: v.surname,
                linkedin: v.linkedin,
                carrera: v.carrera
              },
            ];
            alert(`Añadimos un nuevo estudiante!, bienvenido ${v.name} ${v.surname}`);
          } else {
            console.log('El usuario no se inscribio');
          }
        },
      });
  }
  onDeleteUser(userToDelete:User): void {
    if (confirm(`¿desea eliminar al usuario ${userToDelete.name} ${userToDelete.surname}?`)){
      this.users = this.users.filter((u)=>u.id!== userToDelete.id)
    }
  }
  mostrarTabla: boolean =false;
  toggleTabla () {
    this.mostrarTabla=!this.mostrarTabla
  }
}
