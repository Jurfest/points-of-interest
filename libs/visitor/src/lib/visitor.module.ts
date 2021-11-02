import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';

import { VisitorComponent } from './visitor.component';
import { PoiModule } from '@packt/poi';
import { PoiListComponent } from './poi-list/poi-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([{ path: '', component: VisitorComponent }]),
    PoiModule,
    GoogleMapsModule,
    MatCardModule
  ],
  declarations: [VisitorComponent, PoiListComponent, MapComponent],
})
export class VisitorModule {}
