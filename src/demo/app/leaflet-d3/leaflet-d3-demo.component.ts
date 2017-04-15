import { Component } from '@angular/core';

import * as d3 from 'd3';

import './leaflet-d3-demo.component.scss';

@Component({
	selector: 'leaflet-d3-demo',
	templateUrl: './leaflet-d3-demo.component.html'
})
export class LeafletD3DemoComponent {

	// Open Street Map Definition
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Street Map'
		})
	};

	// Values to bind to Leaflet Directive
	layersControlOptions = { position: 'bottomright' };
	baseLayers = {
		'Open Street Map': this.LAYER_OSM.layer
	};
	options = {
		zoom: 6,
		center: L.latLng([ 46.879966, -121.726909 ])
	};

	// Generators for lat/lon values
	generateLat = d3.randomNormal(this.options.center.lat, 1);
	generateLon = d3.randomNormal(this.options.center.lng, 1);


	hexbinData: [ number, number ][] = [];


	// Generate a new data array for display
	generateHexbinData() {

		let data: [ number, number ][] = [];

		for (let i = 0; i < 1000; i++) {
			data.push([ this.generateLon(), this.generateLat() ]);
		}

		this.hexbinData = data;

	}

	generatePing() {
		// This is empty
	}

}
