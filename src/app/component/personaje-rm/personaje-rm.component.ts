import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RyMPersonaje } from '../../common/ry-mpersonaje';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje-rm',
  standalone: true,
  imports: [],
  templateUrl: './personaje-rm.component.html',
  styleUrl: './personaje-rm.component.css'
})
export class PersonajeRMComponent implements OnInit{

  bdataCHAR!: RyMPersonaje

  constructor(private api: ApiService,
    private activatedRouted: ActivatedRoute,
    private router: Router){}
    
  ngOnInit(): void {
    this.loadPersonaje();
  }
  loadPersonaje(){
    const id = this.activatedRouted.snapshot.params['parametro'];
    this.api.GetDataPersonaje(id).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.bdataCHAR = data;
        },
        error: err => {
          console.log(err)
        },
        complete: () => {
          console.log('Complete')
        }
      }
      )
  }

  CambiarChar(id:number){
    if(id>0 && id<827){
      this.router.navigateByUrl('/personaje/' + id)
      .then(() => this.loadPersonaje())
    }
  }

}
