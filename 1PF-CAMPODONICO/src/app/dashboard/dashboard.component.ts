import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  mostrarAlerta(){
    alert('Por el momento no contamos con este servicio')
  }
  indicacion(){
    alert('Para poder darte de alta clickea en el boton "dar de alta"')
  }
}
