import { Directive, OnInit } from '@angular/core';

import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';


@Directive({
	selector: '[leafletPing]'
})
export class LeafletPingDirective
	implements OnInit {

	leafletDirective: LeafletDirectiveWrapper;

	pingLayer: L.PingLayer;

	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {
		this.leafletDirective.init();

		let map = this.leafletDirective.getMap();
		this.pingLayer = L.pingLayer().addTo(map);
	}

}
