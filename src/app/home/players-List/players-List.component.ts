import { Component, OnInit } from '@angular/core';
import { NBAPlayers } from 'src/app/model/nbaPlayers';
import { MatTableDataSource } from '@angular/material/table';
import { NBAPlayerStats } from 'src/app/model/nbaPlayerStats';
import { PlayersStateService } from 'src/app/state/players-state.service';
import { NBAInfo } from 'src/app/model/nbaInfo';

@Component({
  selector: 'app-players-List',
  templateUrl: './players-List.component.html',
  styleUrls: ['./players-List.component.scss']
})

export class PlayersListComponent implements OnInit  {

  displayedColumns: string[] = ['first_name', 'last_name', 'position', 'height', 
                                'weight', 'jersey_number', 'college', 'country', 'draft_year', 
                                'draft_round', 'draft_number'];

  displayedColumns2: string[] = ['full_name', 'pts', 'ast', 'turnover'];

  allPlayers?: NBAPlayers[] = []; 
  playerStats?: NBAPlayerStats[] = []; 
  dataSource: MatTableDataSource<NBAPlayers>;
  dataSource2: MatTableDataSource<NBAPlayerStats>;
  cursor = 0;
  page = 0;
  per_page = 25;
  isNextPage = false;
  existingPages: number[] = [];
  allNBAInfo: NBAInfo[] = [];

  constructor(public playersStateService: PlayersStateService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  async getPlayers() {
    this.allNBAInfo = [];
    let results = await this.playersStateService.getPlayersFromState();
    if (results != undefined){
      results.forEach(element => {
        if (this.isNextPage){
          if (element.nextPage != undefined){
            this.cursor = element.nextPage;
          }
        } else {
          if (element.previousPage != undefined){
            this.cursor = element.previousPage;
          }
        }
        
        this.allNBAInfo.push(element);
      });
    }
    console.log(this.existingPages);
    if (this.existingPages.filter(item => item == this.page).length == 0) {
      this.existingPages.push(this.page);
      await this.playersStateService.getPlayers({
        cursor: this.cursor,
        first_name: '',
        last_name: '',
        per_page: this.per_page,
        player_ids: [],
        team_ids: [],
        search: '',
        existingData: this.allNBAInfo
      })
      this.playersStateService.players$.subscribe(allPlayers => {
        this.setPlayersList(allPlayers);
      });
    } else {
      this.setPlayersList(results);
    }
  }

  setPlayersList(results: NBAInfo[]) {
    if (results != undefined) {
      this.allPlayers = results[this.page].players;
      this.playerStats = results[this.page].playerStats;
      this.dataSource = new MatTableDataSource(this.allPlayers);
      this.setPlayerStats(results[this.page].playerStats, results[this.page].players);
    }
  }

  setPlayerStats(playersStats?: NBAPlayerStats[], nbaPlayers?: NBAPlayers[]) {
    let updatedPlayersStats = playersStats?.map((obj) => {
                                const firstArrayObj = nbaPlayers?.find((obj2) => obj2.id === obj.player_id);
                                if (firstArrayObj) {
                                  obj.full_name = firstArrayObj?.first_name + ' ' + firstArrayObj?.last_name as string;
                                  return {...firstArrayObj, ...obj}
                                }
                                return null;
                              }).filter((obj) => obj != null);

    this.dataSource2 = new MatTableDataSource(updatedPlayersStats as NBAPlayerStats[]);
  }

  movePrevious(){
    if (this.page != 0){
      this.page--;
      this.isNextPage = false;
      this.getPlayers();
    }
  }

  moveNext(){
    this.page++;
    this.isNextPage = true;
    this.getPlayers();
  }

  changeListSize(evt: any){
    this.cursor = 0;
    this.page = 0;
    this.existingPages = [];
    this.playersStateService.resetPlayersState();
    this.per_page = evt.target.value;
    this.getPlayers();
  }

  textFilter(evt: any){
    if (evt.target.value != '') {
      let filterSearch: string = evt.target.value;
      let filteredResult = this.allPlayers?.
        filter(elements => elements.first_name.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0 || 
                           elements.last_name.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0);
      this.dataSource = new MatTableDataSource(filteredResult);
      this.setPlayerStats(this.playerStats, filteredResult);
    } else {
      this.dataSource = new MatTableDataSource(this.allPlayers);
      this.setPlayerStats(this.playerStats, this.allPlayers);
    }
  }
}
