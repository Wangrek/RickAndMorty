import { Character } from '../../models/character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: any = {};

  constructor() {}

  ngOnInit(): void {}
}
