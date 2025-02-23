import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AllEpisodes } from 'src/app/model/allEpisodes';
import { EpisodeInfo } from 'src/app/model/episodeInfo';
import { CharactersService } from 'src/app/services/characters-service';

@Component({
  selector: 'app-character-Episodes',
  templateUrl: './character-Episodes.component.html',
  styleUrls: ['./character-Episodes.component.scss'],
})

export class CharacterEpisodesComponent implements OnInit   {

  characterEpisodes$: Observable<AllEpisodes>;
  randomEpisodes: EpisodeInfo[];
  unfilteredEpisodes: EpisodeInfo[];

  constructor(public charactersService: CharactersService, private route: ActivatedRoute) { }
  
    ngOnInit() {
       this.getCharacterDetails();
    }

    async getCharacterDetails() {
      await this.charactersService.getEpisodes().subscribe(details => {
        if (details){
          this.randomEpisodes = this.shuffleArray(details.results);
          this.unfilteredEpisodes = this.randomEpisodes;
        }
      });
    }

    shuffleArray(array) {
      var m = array.length, t, i;
   
      while (m) {    
       i = Math.floor(Math.random() * m--);
       t = array[m];
       array[m] = array[i];
       array[i] = t;
      }
   
     return array;
   }

   textFilter(evt: any){
    if (evt.target.value != '') {
      let filterSearch: string = evt.target.value;
      let filteredResult = this.unfilteredEpisodes?.
        filter(elements => elements.name!.toLowerCase().indexOf(filterSearch.toLocaleLowerCase()) >= 0);

      this.randomEpisodes = filteredResult;
    } else {
      this.randomEpisodes = this.unfilteredEpisodes;
    }
  }
  
}
