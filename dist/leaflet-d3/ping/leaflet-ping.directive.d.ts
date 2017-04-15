import { OnInit } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
export declare class LeafletPingDirective implements OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    pingLayer: L.PingLayer;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
}
