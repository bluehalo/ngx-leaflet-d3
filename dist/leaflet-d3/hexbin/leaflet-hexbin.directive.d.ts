import { OnChanges, OnInit, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
export declare class LeafletHexbinDirective implements OnChanges, OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    hexbinLayer: L.HexbinLayer;
    hexbinData: any[];
    hexbinOptions: L.HexbinLayerConfig;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private setHexbinData(data);
}
