import { EventEmitter, OnChanges, OnInit, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
export declare class LeafletHexbinDirective implements OnChanges, OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    hexbinLayer: L.HexbinLayer;
    hexbinData: any[];
    hexbinOptions: L.HexbinLayerConfig;
    hexbinMouseover: EventEmitter<any>;
    hexbinMouseout: EventEmitter<any>;
    hexbinClick: EventEmitter<any>;
    layerReady: EventEmitter<L.HexbinLayer>;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private setHexbinData(data);
}
