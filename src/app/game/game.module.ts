import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [ GameComponent ],
  exports: [ GameComponent ],
  providers: [ GameService ]
})
export class GameModule { }
