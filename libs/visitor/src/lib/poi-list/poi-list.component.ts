import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.scss'],
})
export class PoiListComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init());
  }
}
