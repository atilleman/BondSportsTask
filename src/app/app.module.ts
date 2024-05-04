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
import { PlayersListComponent } from './home/players-List/players-List.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlayersSearchComponent } from './home/players-search/players-search.component';
import { PlayersStateService } from './state/players-state.service';
import { StateHelperService } from './services/state-helper.service';
import { PlayersApiService } from './state/players-api.service';
import { NgxsModule } from '@ngxs/store';
import { PlayersState } from './state/players.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    PlayersSearchComponent,
  ],
  imports: [
    NgxsModule.forRoot([PlayersState]),
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
    MatPaginatorModule 
  ],
  providers: [
    PlayersApiService,
    PlayersStateService,
    StateHelperService],
    bootstrap: [AppComponent]
})
export class AppModule { }
