import { Character } from '../../models/character';
import { CharactersService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: Character = <Character>{};
  id: Number = 10;
  origen: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _charactersService: CharactersService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['characterId'];

      this._charactersService
        .getCharacterById(params['characterId'])
        .subscribe((data) => {
          this.character = data;
          this.origen = data.origin.name
        });
    });
  }

  ngOnInit(): void {}
}
