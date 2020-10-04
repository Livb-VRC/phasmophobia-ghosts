import { GhostsService } from './../../services/ghosts/ghosts.service';
import { Component, OnInit } from '@angular/core';
import { Ghost } from './../../models/Ghost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ghosts: Ghost[];
  clues: Ghost;

  constructor(public ghostService: GhostsService) {}

  ngOnInit(): void {
    this.ghostService.ghosts.subscribe((response) => {
      this.ghosts = response as Ghost[];
      console.log(this.ghosts);
    });
  }
}
