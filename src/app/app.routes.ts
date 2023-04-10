import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/list/characters.component';
import { CharacterComponent } from './components/character/character.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: CharactersComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje/:characterId', component: CharacterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
