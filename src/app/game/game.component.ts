import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  games: any;
  page: number;

  @ViewChild('collapse') collapse: any;

  subscription: Subscription;

  constructor(private _gameService: GameService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.games = this._gameService.getGames();
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('ho');
  }

}
