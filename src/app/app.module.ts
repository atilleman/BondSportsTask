import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './home/characters-List/characters-List.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CharactersMainComponent } from './home/characters-Main/characters-Main.component';
import { CharactersGridComponent } from './home/characters-Grid/characters-Grid.component';
import { CharactersSearchComponent } from './home/characters-search/characters-search.component';
import { CharacterDetailsComponent } from './home/character-Details/character-Details.component';
import { CharacterEpisodesComponent } from './home/character-Episodes/character-Episodes.component';
import { CharactersHeaderComponent } from './home/characters-Header/characters-Header.component';
import { MenuBarComponent } from './home/menuBar/menuBar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersListComponent,
    CharactersMainComponent,
    CharactersGridComponent,
    CharactersSearchComponent,
    CharacterDetailsComponent,
    CharacterEpisodesComponent,
    CharactersHeaderComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    InfiniteScrollDirective
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
