import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { LoginComponent } from './components/login/login.component';
import { FilterByWordPipe } from './pipes/filter-by-words.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { FormsModule } from '@angular/forms';
import { ColorBorderDateDirective } from './directives/color-border-date.directive';
import { BigQuantityPipe } from './pipes/big-quantity-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LoginComponent,
    FilterByWordPipe,
    SortByDatePipe,
    SortByViewsPipe,
    ColorBorderDateDirective,
    BigQuantityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
