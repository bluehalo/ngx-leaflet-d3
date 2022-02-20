import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as L from 'leaflet';

import './hexbin-demo.component.scss';

@Component({
	selector: 'hexbin-demo',
	templateUrl: './hexbin-demo.component.html'
})
export class HexbinDemoComponent
implements OnInit {

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

	hexbinOptions1: L.HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'tomato' ] };
	hexbinOptions2: L.HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'steelblue' ] };
	hexbinOptions3: L.HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'teal' ] };

	hexbinData1: [ number, number ][] = [];
	hexbinData2: [ number, number ][] = [];
	hexbinData3: [ number, number ][] = [];

	ngOnInit() {
		this.generateHexbinData();
	}

	generateHexbinData() {

		this.hexbinData1 = this.generateSeries(-5);
		this.hexbinData2 = this.generateSeries(0);
		this.hexbinData3 = this.generateSeries(5);

	}

	layerReady(layer: L.HexbinLayer) {
		layer.radiusValue((d) => d.length);
	}

	// Generate a new data array for display
	generateSeries(skew: number) {

		const data: [ number, number ][] = [];

		for (let i = 0; i < 1000; i++) {
			data.push([ this.generateLon() + skew, this.generateLat() ]);
		}

		return data;

	}

}
