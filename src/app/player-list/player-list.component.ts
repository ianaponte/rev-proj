import { Component, OnInit } from '@angular/core';
import { players } from '../players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = players;
  constructor() { }

  ngOnInit(): void {
  }

}