import { EventEmitter, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
import { LeafletPingEvent } from '../../leaflet-d3/ping/leaflet-ping-event.model';
export declare class LeafletPingDirective implements OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    pingLayer: L.PingLayer;
    pingOptions: L.PingLayerConfig;
    pingObserverReady: EventEmitter<Observer<LeafletPingEvent>>;
    pingSource: Observable<LeafletPingEvent>;
    pingObserver: Observer<LeafletPingEvent>;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
    /**
     * Submit a ping to the ping layer.
     *
     * @param data Contains the lat/lon information to generate the ping
     * @param cssClass Optional parameter specifying the css class to apply to the ping
     */
    ping(data: any, cssClass?: string): void;
}
