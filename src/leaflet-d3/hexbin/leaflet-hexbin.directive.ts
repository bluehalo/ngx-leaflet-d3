import { Directive, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';


@Directive({
	selector: '[leafletHexbin]'
})
export class LeafletHexbinDirective
	implements OnChanges, OnInit {

	leafletDirective: LeafletDirectiveWrapper;
	hexbinLayer: L.HexbinLayer;

	// Hexbin data binding
	@Input('leafletHexbin') hexbinData: any[] = [];

	// Options binding
	@Input('leafletHexbinOptions') hexbinOptions: L.HexbinLayerConfig;

	// Interaction events
	@Output('leafletHexbinMouseover') hexbinMouseover: EventEmitter<any> = new EventEmitter<any>();
	@Output('leafletHexbinMouseout') hexbinMouseout: EventEmitter<any> = new EventEmitter<any>();
	@Output('leafletHexbinClick') hexbinClick: EventEmitter<any> = new EventEmitter<any>();

	// Fired when the layer is created
	@Output('leafletHexbinLayerReady') layerReady: EventEmitter<L.HexbinLayer> = new EventEmitter<L.HexbinLayer>();

	constructor(leafletDirective: LeafletDirective, private zone: NgZone) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		const map = this.leafletDirective.getMap();

		this.zone.runOutsideAngular(() => {
			this.hexbinLayer = L.hexbinLayer(this.hexbinOptions);
		});

		// Fire the ready event
		this.layerReady.emit(this.hexbinLayer);

		// register for the hexbin events
		this.hexbinLayer.dispatch().on('mouseover', (p: any) => {
			this.zone.run(() => {
				this.hexbinMouseover.emit(p);
			});

		});
		this.hexbinLayer.dispatch().on('mouseout', (p: any) => {
			this.zone.run(() => {
				this.hexbinMouseout.emit(p);
			});
		});
		this.hexbinLayer.dispatch().on('click', (p: any) => {
			this.zone.run(() => {
				this.hexbinClick.emit(p);
			});
		});

		this.hexbinLayer.addTo(map);

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
			this.zone.runOutsideAngular(() => {
				this.hexbinLayer.data(data);
			});
		}

	}
}
