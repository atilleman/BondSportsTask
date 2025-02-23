import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.scss']
})
export class CharactersSearchComponent {

  @Output() filterSearch = new EventEmitter<string>();
  
  updateResults(evt: any) {
    this.filterSearch.emit(evt);
  }
}
