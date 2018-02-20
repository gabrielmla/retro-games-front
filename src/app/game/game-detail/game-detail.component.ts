import { GameService } from './../game.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnDestroy {

  game: any;

  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _gameService: GameService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.game = this._gameService.getGame(params['id']);
        if (this.game == null) {
          this.router.navigate(['games/notfound']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
