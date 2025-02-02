import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superheroe-one',
  standalone: true,
  imports: [],
  templateUrl: './superheroe-one.component.html',
  styleUrl: './superheroe-one.component.css'
})
export class SuperheroeONEComponent implements OnInit {
  bdata:any;
  constructor(
    private dataservice: DataService,
    private activatedRouted: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.loadheroeONe();
  }
  loadheroeONe(){
    const index = this.activatedRouted.snapshot.params['index'];
    this.dataservice.getSupeHeroe().subscribe(
      {
        next: (data)=>{
          this.bdata = data.members[index]
          console.log(data.members[index])
        },
        error: (err)=>{
          console.log(err)
        },
        complete:()=>{
          console.log('completed')
        }
      }
    )
  }
}
