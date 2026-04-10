import { Directive, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

import { Observable, Observer } from 'rxjs';
import * as L from 'leaflet';
import '@bluehalo/leaflet-d3';

import { LeafletDirective, LeafletDirectiveWrapper } from '@bluehalo/ngx-leaflet';
import { LeafletPingEvent } from '../ping/leaflet-ping-event.model';

@Directive({
    selector: '[leafletPing]',
    standalone: true
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

	constructor(leafletDirective: LeafletDirective, private zone: NgZone) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		const map = this.leafletDirective.getMap();

		this.zone.runOutsideAngular(() => {
			this.pingLayer = L.pingLayer(this.pingOptions).addTo(map);

			// Handle incoming ping events
			this.pingSource = new Observable<LeafletPingEvent>((observer: Observer<LeafletPingEvent>) => {
				this.pingObserver = observer;
				this.pingObserverReady.emit(this.pingObserver);
			});

			this.pingSource.subscribe((event: LeafletPingEvent) => {
				if (null != event) {
					this.ping(event.data, event.cssClass);
				}
			});

		});

	}

	/**
	 * Submit a ping to the ping layer.
	 *
	 * @param data Contains the lat/lon information to generate the ping
	 * @param cssClass Optional parameter specifying the css class to apply to the ping
	 */
	ping(data: any, cssClass?: string) {

		if (null != this.pingLayer) {

			this.zone.runOutsideAngular(() => {
				this.pingLayer.ping(data, cssClass);
			});

		}

	}
}
