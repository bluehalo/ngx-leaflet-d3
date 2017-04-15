/*! @asymmetrik/angular2-leaflet-d3 - 0.0.1 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@asymmetrik/angular2-leaflet'), require('leaflet'), require('@asymmetrik/leaflet-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@asymmetrik/angular2-leaflet', 'leaflet', '@asymmetrik/leaflet-d3'], factory) :
	(factory((global.angular2LeafletD3 = global.angular2LeafletD3 || {}),global.ng.core,global.angular2Leaflet,global.L));
}(this, (function (exports,_angular_core,_asymmetrik_angular2Leaflet,L) { 'use strict';

var LeafletHexbinDirective = (function () {
    function LeafletHexbinDirective(leafletDirective) {
        this.hexbinData = [];
        this.leafletDirective = new _asymmetrik_angular2Leaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletHexbinDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.hexbinLayer = L.hexbinLayer(this.hexbinOptions).addTo(map);
        // Initialize the data (in case the data was set before the directive was initialized)
        this.setHexbinData(this.hexbinData);
    };
    LeafletHexbinDirective.prototype.ngOnChanges = function (changes) {
        // Set the new data
        if (changes['hexbinData']) {
            this.setHexbinData(changes['hexbinData'].currentValue);
        }
    };
    LeafletHexbinDirective.prototype.setHexbinData = function (data) {
        // Only if there is a hexbinLayer do we apply the data
        if (null != this.hexbinLayer) {
            this.hexbinLayer.data(data);
        }
    };
    return LeafletHexbinDirective;
}());
LeafletHexbinDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[leafletHexbin]'
            },] },
];
/** @nocollapse */
LeafletHexbinDirective.ctorParameters = function () { return [
    { type: _asymmetrik_angular2Leaflet.LeafletDirective, },
]; };
LeafletHexbinDirective.propDecorators = {
    'hexbinData': [{ type: _angular_core.Input, args: ['leafletHexbin',] },],
    'hexbinOptions': [{ type: _angular_core.Input, args: ['leafletHexbinOptions',] },],
};

var LeafletPingDirective = (function () {
    function LeafletPingDirective(leafletDirective) {
        this.leafletDirective = new _asymmetrik_angular2Leaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletPingDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.pingLayer = L.pingLayer().addTo(map);
    };
    return LeafletPingDirective;
}());
LeafletPingDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[leafletPing]'
            },] },
];
/** @nocollapse */
LeafletPingDirective.ctorParameters = function () { return [
    { type: _asymmetrik_angular2Leaflet.LeafletDirective, },
]; };

var LeafletD3Module = (function () {
    function LeafletD3Module() {
    }
    LeafletD3Module.forRoot = function () {
        return { ngModule: LeafletD3Module, providers: [] };
    };
    return LeafletD3Module;
}());
LeafletD3Module.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _asymmetrik_angular2Leaflet.LeafletModule
                ],
                exports: [
                    LeafletHexbinDirective,
                    LeafletPingDirective
                ],
                declarations: [
                    LeafletHexbinDirective,
                    LeafletPingDirective
                ]
            },] },
];
/** @nocollapse */
LeafletD3Module.ctorParameters = function () { return []; };

exports.LeafletD3Module = LeafletD3Module;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-leaflet-d3.js.map
