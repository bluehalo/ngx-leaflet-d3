import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable, Observer } from 'rxjs';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
import { LeafletPingEvent } from '../../leaflet-d3/ping/leaflet-ping-event.model';

@Directive({
	selector: '[leafletPing]'
})
export class LeafletPingDirective
	implements OnInit {

	leafletDirective: LeafletDirectiveWrapper;

	pingLayer: L.PingLayer;

	@Input('leafletPingOptions') pingOptions: L.PingLayerConfig;

	@Output('leafletPingObserver')
	pingObserverReady = new EventEmitter<Observer<LeafletPingEvent>>();

	pingSource: Observable<LeafletPingEvent>;
	pingObserver: Observer<LeafletPingEvent>;

	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		const map = this.leafletDirective.getMap();
		this.pingLayer = L.pingLayer(this.pingOptions).addTo(map);

		// Handle incoming ping events
		this.pingSource = Observable.create((observer: Observer<LeafletPingEvent>) => {
				this.pingObserver = observer;
				this.pingObserverReady.emit(this.pingObserver);
			})
			.subscribe(
				(event: LeafletPingEvent) => {

					if (null != event) {
						this.ping(event.data, event.cssClass);
					}

				}
			);

	}

	/**
	 * Submit a ping to the ping layer.
	 *
	 * @param data Contains the lat/lon information to generate the ping
	 * @param cssClass Optional parameter specifying the css class to apply to the ping
	 */
	ping(data: any, cssClass?: string) {

		if (null != this.pingLayer) {
			this.pingLayer.ping(data, cssClass);
		}

	}
}
