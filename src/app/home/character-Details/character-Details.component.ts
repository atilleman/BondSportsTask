import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterInfo } from 'src/app/model/characterInfo';
import { CharactersService } from 'src/app/services/characters-service';

@Component({
  selector: 'app-character-Details',
  templateUrl: './character-Details.component.html',
  styleUrls: ['./character-Details.component.scss'],
})

export class CharacterDetailsComponent implements OnInit   {

  characterDetails$: Observable<CharacterInfo>;

  constructor(public charactersService: CharactersService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      const firstParam = this.route.snapshot.queryParamMap.get('id');
      this.getCharacterDetails(firstParam);
    }

    async getCharacterDetails(id) {
      this.characterDetails$ = await this.charactersService.getCharacterDetails(id);

      // await this.charactersService.getCharacterDetails(id).subscribe(details => {
      //   if (details){
      //     console.log(details);
      //   }
      // });
    }
  
}
