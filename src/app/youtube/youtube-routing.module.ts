import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: ':id', component: ItemInfoComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeRoutingModule { }
