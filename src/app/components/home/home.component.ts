import { GhostsService } from './../../services/ghosts/ghosts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public ghostService: GhostsService) { }

  ngOnInit(): void {
    this.ghostService.ghosts.subscribe(response=>{
      console.log(response);
    })
  }

}
