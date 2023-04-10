import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { CharactersService } from './services/character.service';

// Components
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/list/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

// Pipes
import {
  CharacterStatusIconPipe,
  CharacterStatusPipe,
  CharacterGenderPipe,
  CharacterSpeciesPipe,
} from './pipes/character-status.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    CharacterCardComponent,
    CharacterStatusIconPipe,
    CharacterStatusPipe,
    CharacterGenderPipe,
    CharacterSpeciesPipe,
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
