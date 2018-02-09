import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: any;
  page: number;

  subscription: Subscription;

  constructor(private _gameService: GameService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.games = this._gameService.getGames();
    this.subscription = this.router.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    );
  }

}
