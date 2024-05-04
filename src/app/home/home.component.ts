import { Component, ViewChild } from '@angular/core';
import { PlayersListComponent } from './players-List/players-List.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(PlayersListComponent) playersListComponent: PlayersListComponent;

  filterSearch(searchText: any){
    this.playersListComponent.textFilter(searchText);
  }
}
