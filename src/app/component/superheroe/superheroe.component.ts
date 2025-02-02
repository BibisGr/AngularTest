import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Superheros } from '../../common/superheros';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent implements OnInit{

   superheroe!: Superheros;
   constructor(private dataService: DataService) { }
   ngOnInit() {
     this.loadSuperheroes();
   }
   loadSuperheroes() {
    this.dataService.getSuperHeroes().subscribe(
      {
        next: (data) => {
          console.log(data)
          this.superheroe = data;
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

}
