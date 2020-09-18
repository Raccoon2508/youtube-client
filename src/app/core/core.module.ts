import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './pages/page404/page404.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [Page404Component, AdminComponent],
  imports: [CommonModule],
  exports: [],
})
export class CoreModule {}
