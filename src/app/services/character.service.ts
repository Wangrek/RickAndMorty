
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { CharacterInformation } from './../models/characterinformation';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters: Character[] = [];
  page: Number = 42;
  public apiUrl:string;


  constructor(private http: HttpClient) {
	this.apiUrl = GLOBAL.url;
  }

  getAllCharacters(page: Number): Observable<CharacterInformation> {
    return this.http.get<CharacterInformation>(this.apiUrl + '/character/'+ '?page='+page);
  }

  getCharacterById(idx: string): Observable<Character> {
    return this.http.get<Character>(this.apiUrl + '/character/' + idx);
  }

}
