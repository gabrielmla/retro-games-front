import { GameRoutingModule } from './game.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { GameComponent } from './game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameNotFoundComponent } from './game-not-found/game-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [ GameComponent, GameDetailComponent, GameNotFoundComponent ],
  exports: [ GameComponent ],
  providers: [ GameService ]
})
export class GameModule { }
