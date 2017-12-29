import { EventEmitter, NgZone, OnChanges, OnInit, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
export declare class LeafletHexbinDirective implements OnChanges, OnInit {
    private zone;
    leafletDirective: LeafletDirectiveWrapper;
    hexbinLayer: L.HexbinLayer;
    hexbinData: any[];
    hexbinOptions: L.HexbinLayerConfig;
    hexbinMouseover: EventEmitter<any>;
    hexbinMouseout: EventEmitter<any>;
    hexbinClick: EventEmitter<any>;
    layerReady: EventEmitter<L.HexbinLayer>;
    constructor(leafletDirective: LeafletDirective, zone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private setHexbinData(data);
}
