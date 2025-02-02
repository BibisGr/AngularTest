import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RyMEpisode } from '../../common/ry-mEpisode';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent implements OnInit{
  bdataEPI!: RyMEpisode;
  constructor(private api: ApiService) { }
  ngOnInit(){
    this.loadDataEpisode();
  }
  loadDataEpisode(){
    // this.api.GetDataEpisode().subscribe(
    //   {
    //     next: (data) => {
    //       console.log(data)
    //       this.bdataEPI = data;
    //     },
    //     error: err => {
    //       console.log(err)
    //     },
    //     complete: () => {
    //       console.log('Complete')
    //     }
    //   }
    //   )
  }
}
