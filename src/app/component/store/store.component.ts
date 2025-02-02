import { Rickymorty } from './../../common/rickymorty';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  constructor(private api: ApiService) { }

  bdata!: Rickymorty; // si  es un array  OOOO data: any{} = {};

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.GetData().subscribe(
      {
        next: (data) => {
          console.log(data)
          this.bdata = data;
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
  changePages(page: string) {
    switch (page) {
      case 'first':
        this.loadPage('https://rickandmortyapi.com/api/character/?page=1');
        break;
      case 'prev':
        this.loadPage(this.bdata.info.prev);
        break;
      case 'next':
        this.loadPage(this.bdata.info.next);
        break;
      case 'last':
        this.loadPage('https://rickandmortyapi.com/api/character/?page='+ this.bdata.info.pages);
        console.log('https://rickandmortyapi.com/api/character/?page='+ this.bdata.info.pages)
        break;
    }
  }

  loadPage(page: string) {
    this.api.getCharacterPage(page).subscribe(
      {
        next:data =>{
          this.bdata = data
        },
        error: (err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log('complete')
        }
      }
    )
  }
}
