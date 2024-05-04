import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-players-search',
  templateUrl: './players-search.component.html',
  styleUrls: ['./players-search.component.scss']
})
export class PlayersSearchComponent {

  @Output() filterSearch = new EventEmitter<string>();
  
  updateResults(evt: any) {
    this.filterSearch.emit(evt);
  }
}
