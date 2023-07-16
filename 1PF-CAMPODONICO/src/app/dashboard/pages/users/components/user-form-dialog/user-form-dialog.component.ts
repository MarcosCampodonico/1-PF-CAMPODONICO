import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss'],
})
export class UserFormDialogComponent {
  nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(2),
    
  ]);

  surnameControl = new FormControl(null, [Validators.required]);
  linkedinControl = new FormControl(null,);
  carreraControl = new FormControl(null,[Validators.required]);
  emailControl = new FormControl(null, [Validators.required]);
  passwordControl = new FormControl(null, [Validators.required]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    carrera:this.carreraControl,
    email: this.emailControl,
    linkedin:this.linkedinControl,
    password: this.passwordControl
  });

  constructor(private dialogRef: MatDialogRef<UserFormDialogComponent>) {}
  onSubmit(): void {
    if (this.userForm.invalid) { //si es invalido el formulario no podemos guardarlo y le aplicamos que faltan campos requeridos
      this.userForm.markAllAsTouched();//la funcion mark me sirve para resaltar los requeridos
    } else {
      this.dialogRef.close(this.userForm.value);//esto me dice que cuando cierre el form voy a mandar los datos que esten en el dialogo
    }
  }
}
