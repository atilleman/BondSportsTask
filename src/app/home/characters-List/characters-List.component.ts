import { Component, Input } from '@angular/core';
import { AllCharacters } from 'src/app/model/allCharacters';
import { CharacterInfo } from 'src/app/model/characterInfo';

@Component({
  selector: 'app-characters-List',
  templateUrl: './characters-List.component.html',
  styleUrls: ['./characters-List.component.scss'],
})

export class CharactersListComponent {

  @Input() characters: CharacterInfo[];
  allCharacters: AllCharacters;

  constructor() { }

  textFilter(evt: any, unfilteredCharacters: CharacterInfo[]){
    if (evt.target.value != '' && this.characters) {
      let filterSearch: string = evt.target.value;
      let filteredResult = unfilteredCharacters?.
        filter(elements => elements.status!.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0 || 
                           elements.name!.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0);

      this.characters = filteredResult;
    } else {
      this.characters = unfilteredCharacters;
    }
  }
}
