import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) {}
}
