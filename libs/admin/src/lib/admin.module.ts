import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { PoiModule } from '@packt/poi';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminComponent }]),
    PoiModule,
    ChartsModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
