import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameNotFoundComponent } from './game-not-found/game-not-found.component';

const gameRoutes: Routes = [
    { path: 'games', component: GameComponent, children: [
        { path: ':id', component: GameDetailComponent },
        { path: 'notfound', component: GameNotFoundComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(gameRoutes)],
    exports: [RouterModule]
})

export class GameRoutingModule { }
