import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilterByWordPipe } from './pipes/filter-by-words.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { ColorBorderDateDirective } from './directives/color-border-date.directive';
import { BigQuantityPipe } from './pipes/big-quantity-pipe.pipe';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RouterPageComponent } from './pages/router-page/router-page.component';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterByWordPipe,
    SortByDatePipe,
    SortByViewsPipe,
    ColorBorderDateDirective,
    BigQuantityPipe,
    ItemInfoComponent,
    HeaderComponent,
    MainPageComponent,
    LoginComponent,
    RouterPageComponent
  ],
  imports: [CommonModule, FormsModule, YoutubeRoutingModule],
  exports: [HeaderComponent]
})
export class YoutubeModule {}
