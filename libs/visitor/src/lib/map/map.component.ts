import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  poi$ = this.store.select(PoiSelectors.getSelected);
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  constructor(private store: Store) {}

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
    this.info?.open(marker);
  }
}
