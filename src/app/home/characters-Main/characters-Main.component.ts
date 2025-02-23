import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AllCharacters } from 'src/app/model/allCharacters';
import { CharacterInfo } from 'src/app/model/characterInfo';
import { CharactersService } from 'src/app/services/characters-service';
import { CharactersListComponent } from '../characters-List/characters-List.component';
import { Router } from '@angular/router';
import { CharactersGridComponent } from '../characters-Grid/characters-Grid.component';

@Component({
  selector: 'app-characters-Main',
  templateUrl: './characters-Main.component.html',
  styleUrls: ['./characters-Main.component.scss'],
})

export class CharactersMainComponent implements OnInit  {

  isChecked = false;
  page = 1;
  allCharactersInfo: CharacterInfo[] = [];
  allCharacters: AllCharacters;
  characters: CharacterInfo[] = [];

  displayedColumns: string[] = ['id', 'name', 'status', 'species', 
                                'type', 'gender'];
  dataSource: MatTableDataSource<CharacterInfo>;

  constructor(public charactersService: CharactersService, private _router: Router) { }

  async ngOnInit() {
    await this.getCharacters();
  }

  async getCharacters() {

    await this.charactersService.getCharacters({
      page: this.page++
    }).subscribe(allCharacters => {
      if (allCharacters){
        this.loadCharacters(allCharacters.results);
      }
    });
  }

  onScroll(e): void {
    this.getCharacters();
  }

  loadCharacters(results: CharacterInfo[]) {
    for (let i = 0; i < 20; i++) {
      this.characters.push({
        id: results[i].id,
        name: results[i].name,
        status: results[i].status,
        species: results[i].species,
        type: results[i].type,
        gender: results[i].gender,
        image: results[i].image,
      });
    }
    this.dataSource = new MatTableDataSource(this.characters);
  }

  @ViewChild(CharactersListComponent) charactersListComponent: CharactersListComponent;
  @ViewChild(CharactersGridComponent) charactersGridComponent: CharactersGridComponent;

  filterSearchList(searchText: any){
    this.charactersListComponent.textFilter(searchText, this.characters);
  }
  
  filterSearchGrid(searchText: any){
    this.charactersGridComponent.textFilter(searchText, this.characters);
  }

  getCharacterDetails(id: number): void {
    const url = '/get-characters-details?id=' + id;
    this._router.navigateByUrl(url, { skipLocationChange: false });
  }
}
