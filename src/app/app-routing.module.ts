import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATION_URLS } from './model/enums/navigation-urls';
import { CharactersMainComponent } from './home/characters-Main/characters-Main.component';
import { CharacterDetailsComponent } from './home/character-Details/character-Details.component';
import { CharacterEpisodesComponent } from './home/character-Episodes/character-Episodes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: NAVIGATION_URLS.GET_CHARACTERS,
    pathMatch: 'full'
  },
  {
    path: NAVIGATION_URLS.GET_CHARACTERS,
    component: CharactersMainComponent
  },
  {
    path: NAVIGATION_URLS.GET_CHARACTERS_DETAILS,
    component: CharacterDetailsComponent
  },
  {
    path: NAVIGATION_URLS.GET_CHARACTERS_EPISODES,
    component: CharacterEpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
