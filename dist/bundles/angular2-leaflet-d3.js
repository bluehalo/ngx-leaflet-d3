/*! @asymmetrik/angular2-leaflet-d3 - 0.0.1 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@asymmetrik/angular2-leaflet'), require('leaflet'), require('rxjs'), require('@asymmetrik/leaflet-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@asymmetrik/angular2-leaflet', 'leaflet', 'rxjs', '@asymmetrik/leaflet-d3'], factory) :
	(factory((global.angular2LeafletD3 = global.angular2LeafletD3 || {}),global.ng.core,global.angular2Leaflet,global.L,global.Rx));
}(this, (function (exports,_angular_core,_asymmetrik_angular2Leaflet,L,rxjs) { 'use strict';

var LeafletHexbinDirective = (function () {
    function LeafletHexbinDirective(leafletDirective) {
        // Hexbin data binding
        this.hexbinData = [];
        // Interaction events
        this.hexbinMouseover = new _angular_core.EventEmitter();
        this.hexbinMouseout = new _angular_core.EventEmitter();
        this.hexbinClick = new _angular_core.EventEmitter();
        // Fired when the layer is created
        this.layerReady = new _angular_core.EventEmitter();
        this.leafletDirective = new _asymmetrik_angular2Leaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletHexbinDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.hexbinLayer = L.hexbinLayer(this.hexbinOptions);
        // Fire the ready event
        this.layerReady.emit(this.hexbinLayer);
        // register for the hexbin events
        this.hexbinLayer.dispatch().on('mouseover', function (p) { _this.hexbinMouseover.emit(p); });
        this.hexbinLayer.dispatch().on('mouseout', function (p) { _this.hexbinMouseout.emit(p); });
        this.hexbinLayer.dispatch().on('click', function (p) { _this.hexbinClick.emit(p); });
        this.hexbinLayer.addTo(map);
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
    'hexbinMouseover': [{ type: _angular_core.Output, args: ['leafletHexbinMouseover',] },],
    'hexbinMouseout': [{ type: _angular_core.Output, args: ['leafletHexbinMouseout',] },],
    'hexbinClick': [{ type: _angular_core.Output, args: ['leafletHexbinClick',] },],
    'layerReady': [{ type: _angular_core.Output, args: ['leafletHexbinLayerReady',] },],
};

var LeafletPingDirective = (function () {
    function LeafletPingDirective(leafletDirective) {
        this.pingObserverReady = new _angular_core.EventEmitter();
        this.leafletDirective = new _asymmetrik_angular2Leaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletPingDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.pingLayer = L.pingLayer(this.pingOptions).addTo(map);
        // Handle incoming ping events
        this.pingSource = rxjs.Observable.create(function (observer) {
            _this.pingObserver = observer;
            _this.pingObserverReady.emit(_this.pingObserver);
        })
            .subscribe(function (event) {
            if (null != event) {
                _this.ping(event.data, event.cssClass);
            }
        });
    };
    /**
     * Submit a ping to the ping layer.
     *
     * @param data Contains the lat/lon information to generate the ping
     * @param cssClass Optional parameter specifying the css class to apply to the ping
     */
    LeafletPingDirective.prototype.ping = function (data, cssClass) {
        if (null != this.pingLayer) {
            this.pingLayer.ping(data, cssClass);
        }
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
LeafletPingDirective.propDecorators = {
    'pingOptions': [{ type: _angular_core.Input, args: ['leafletPingOptions',] },],
    'pingObserverReady': [{ type: _angular_core.Output, args: ['leafletPingObserver',] },],
};

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
