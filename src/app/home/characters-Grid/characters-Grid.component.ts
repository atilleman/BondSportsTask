import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterInfo } from 'src/app/model/characterInfo';

@Component({
  selector: 'app-characters-Grid',
  templateUrl: './characters-Grid.component.html',
  styleUrls: ['./characters-Grid.component.scss'],
})

export class CharactersGridComponent  {

  @Input() dataSource: MatTableDataSource<CharacterInfo>;
  displayedColumns: string[] = ['id', 'name', 'status', 'species', 
                                'type', 'gender'];
  
  constructor() { }

  textFilter(evt: any, unfilteredCharacters: CharacterInfo[]){
    if (evt.target.value != '' && this.dataSource) {
      let filterSearch: string = evt.target.value;
      let filteredResult = unfilteredCharacters?.
        filter(elements => elements.status!.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0 || 
                            elements.name!.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0);

      this.dataSource = new MatTableDataSource(filteredResult);
    } else {
      this.dataSource = new MatTableDataSource(unfilteredCharacters);
    }
  }

}
