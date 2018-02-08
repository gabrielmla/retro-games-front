import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameNotFoundComponent } from './game/game-not-found/game-not-found.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', component: GameComponent },
    { path: 'game/:id', component: GameDetailComponent},
    { path: 'game/notfound', component: GameNotFoundComponent },
    { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
