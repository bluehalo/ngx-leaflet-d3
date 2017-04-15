import { Directive, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

import * as L from 'leaflet';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';


@Directive({
	selector: '[leafletHexbin]'
})
export class LeafletHexbinDirective
	implements OnChanges, OnInit {

	leafletDirective: LeafletDirectiveWrapper;

	hexbinLayer: L.HexbinLayer;

	@Input('leafletHexbin') hexbinData: any[] = [];

	@Input('leafletHexbinOptions') hexbinOptions: L.HexbinLayerConfig;

	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		let map = this.leafletDirective.getMap();
		this.hexbinLayer = L.hexbinLayer(this.hexbinOptions).addTo(map);

		// Initialize the data (in case the data was set before the directive was initialized)
		this.setHexbinData(this.hexbinData);

	}

	ngOnChanges(changes: { [key: string]: SimpleChange }) {

		// Set the new data
		if (changes['hexbinData']) {
			this.setHexbinData(changes['hexbinData'].currentValue);
		}

	}

	private setHexbinData(data: any[]) {

		// Only if there is a hexbinLayer do we apply the data
		if (null != this.hexbinLayer) {
			this.hexbinLayer.data(data);
		}

	}
}
