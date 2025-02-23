import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

enum ScreenTypes {
  characters = 'characters',
  episodes = 'episodes'
}

@Component({
  selector: 'app-menuBar',
  templateUrl: './menuBar.component.html',
  styleUrls: ['./menuBar.component.scss'],
})

export class MenuBarComponent {

  constructor(private _router: Router) { }
    
  updateScreen(screenType: string) {
    let url = '';
    switch (screenType) {
      case ScreenTypes.characters:
        url = '/get-characters';
      break;
  
      case ScreenTypes.episodes:
        url = '/get-characters-episodes';
        break;
    }
    this._router.navigateByUrl(url);
    
  }
}
