import { Component } from '@angular/core';

import { Observer } from 'rxjs';
import * as d3 from 'd3';

import './ping-demo.component.scss';


@Component({
	selector: 'ping-demo',
	templateUrl: './ping-demo.component.html'
})
export class PingDemoComponent {

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

	playing: boolean = true;
	private leafletPingObserver: Observer<any>;


	setLeafletPingObserver(observer: Observer<any>) {

		this.leafletPingObserver = observer;

		// Start the ping loop
		setTimeout(this.generatePings.bind(this), 100);

	}

	private generatePings() {

		if (this.playing) {
			this.leafletPingObserver.next({
				data: [ this.generateLon(), this.generateLat() ],
				cssClass: (Math.random() > 0.25) ? 'ping-blue' : 'ping-red'
			});
		}

		setTimeout(this.generatePings.bind(this), 100);
	}
}
