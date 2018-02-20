import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class GameService {

  games: any[] = [
    { id: 1,
    name: 'The Legend of Zelda: A Link to the Past',
    description: 'Venture back to Hyrule and an age of magic and heroes. The predecessors of Link and Zelda face monsters on the march when a menacing magician takes over the kingdom. Only you can prevent his evil plot from shattering the land of Hyrule.',
    genre: 'Action, RPG',
    release_date: '1991-11-21',
    rating: 98,
    cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg/220px-The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg',
    images: ["http://images.eurogamer.net/2013/articles/1/6/3/9/8/8/1/138661019085.jpg",
             "https://static1.squarespace.com/static/592da619cd0f68e4917718c4/t/59694e64b3db2bfde4160bac/1500073661403/zelda.jpg",
             "http://thegamingplus.com/wp-content/uploads/2015/01/A-Link-to-the-Past.jpg"] },
    { id: 2,
      name: 'Super Mario World',
      description: 'Explore nine worlds and 96 levels of non stop action!',
      genre: 'Action, Platform',
      release_date: '1990-11-21',
      rating: 100,
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png',
      images: [] },
    {
      id: 3,
      name: 'Fill',
      description: 'sdoiugfaposifdjsadjaslkdj'
    },
    {
      id: 4,
      name: 'Fill',
      description: 'sdoiugfaposifdjsadjaslkdj'
    },
    {
      id: 5,
      name: 'Fill',
      description: 'sdoiugfaposifdjsadjaslkdj'
    },
    {
      id: 6,
      name: 'Fill',
      description: 'sdoiugfaposifdjsadjaslkdj'
    }
    ];

  constructor() { }

  getGames() {
    return this.games;
   }

  getGame(id: number) {
    for (var i = 0; i < this.games.length; i++) {
      if (this.games[i].id == id) {
        return this.games[i];
      }
    }

    return null;
  }

}
