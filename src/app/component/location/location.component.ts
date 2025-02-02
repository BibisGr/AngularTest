import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RyMLocations } from '../../common/ry-mlocations';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{
  bdataLOC!: RyMLocations;
  constructor(private api: ApiService) { }
  ngOnInit(){
    this.loadDataLocation();
  }

  loadDataLocation(){
    // this.api.GetDataLocation().subscribe(
    //   {
    //     next: (data) => {
    //       console.log(data)
    //       this.bdataLOC = data;
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
