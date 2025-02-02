import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Trabajador } from './common/trabajador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //atributos, variables
  trabajdores: Trabajador[] = [];

  //contructor(es)
  constructor() {
  }

  //metodos
  ngOnInit(): void {
    this.rellenartrabajadores();
  }
  rellenartrabajadores() {
    this.trabajdores.push(
      {
        persona:{
          nombre: 'Paula',
          edad: 25,
          mayor: this.esMayor(25)
        },
        profesion: 'bailarina'
      },
      {
        persona:{
          nombre: 'Jose',
          edad: 30,
          mayor: this.esMayor(30)
        },
        profesion: 'Ingeniero'
      },
      {
        persona:{
          nombre: 'Raúl',
          edad: 25,
          mayor: this.esMayor(17)
        },
        profesion: 'estudiante'
      }

    )
  }
  private esMayor(edad: number) {
    return edad >= 18;
  }

}
