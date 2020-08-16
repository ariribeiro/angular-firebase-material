import { SidenavModule } from './sidenav/sidenav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,

    // Material angular
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    SidenavModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
