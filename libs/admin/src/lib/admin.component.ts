import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Label } from 'ng2-charts';

import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { AdminService } from './admin.service';

@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  data: number[] = [];
  labels: Label[] = [];
  private subscription: Subscription | undefined;

  constructor(private store: Store, private adminService: AdminService) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(PoiSelectors.getAllPoi)
      .subscribe((pois) => {
        this.buildChart(pois);
      });
    this.store.dispatch(PoiActions.init());
  }

  private buildChart(pois: PoiEntity[]) {
    this.labels = pois.map((poi) => poi.name);
    this.data = this.adminService.getStatistics(pois);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
