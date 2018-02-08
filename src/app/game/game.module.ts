import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { GameComponent } from './game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { routing } from './../app.routing';
import { GameNotFoundComponent } from './game-not-found/game-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ GameComponent, GameDetailComponent, GameNotFoundComponent ],
  exports: [ GameComponent ],
  providers: [ GameService ]
})
export class GameModule { }
