/*! @asymmetrik/ngx-leaflet-d3 - 0.2.0 - Copyright Asymmetrik, Ltd. 2007-2017 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@asymmetrik/ngx-leaflet'), require('leaflet'), require('rxjs'), require('@asymmetrik/leaflet-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@asymmetrik/ngx-leaflet', 'leaflet', 'rxjs', '@asymmetrik/leaflet-d3'], factory) :
	(factory((global.ngxLeafletD3 = {}),global.ng.core,global.ngxLeaflet,global.L,global.Rx));
}(this, (function (exports,core,ngxLeaflet,L,rxjs) { 'use strict';

var LeafletHexbinDirective = /** @class */ (function () {
    function LeafletHexbinDirective(leafletDirective) {
        // Hexbin data binding
        this.hexbinData = [];
        // Interaction events
        this.hexbinMouseover = new core.EventEmitter();
        this.hexbinMouseout = new core.EventEmitter();
        this.hexbinClick = new core.EventEmitter();
        // Fired when the layer is created
        this.layerReady = new core.EventEmitter();
        this.leafletDirective = new ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
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
    LeafletHexbinDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[leafletHexbin]'
                },] },
    ];
    /** @nocollapse */
    LeafletHexbinDirective.ctorParameters = function () { return [
        { type: ngxLeaflet.LeafletDirective, },
    ]; };
    LeafletHexbinDirective.propDecorators = {
        'hexbinData': [{ type: core.Input, args: ['leafletHexbin',] },],
        'hexbinOptions': [{ type: core.Input, args: ['leafletHexbinOptions',] },],
        'hexbinMouseover': [{ type: core.Output, args: ['leafletHexbinMouseover',] },],
        'hexbinMouseout': [{ type: core.Output, args: ['leafletHexbinMouseout',] },],
        'hexbinClick': [{ type: core.Output, args: ['leafletHexbinClick',] },],
        'layerReady': [{ type: core.Output, args: ['leafletHexbinLayerReady',] },],
    };
    return LeafletHexbinDirective;
}());

var LeafletPingDirective = /** @class */ (function () {
    function LeafletPingDirective(leafletDirective) {
        this.pingObserverReady = new core.EventEmitter();
        this.leafletDirective = new ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
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
    LeafletPingDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[leafletPing]'
                },] },
    ];
    /** @nocollapse */
    LeafletPingDirective.ctorParameters = function () { return [
        { type: ngxLeaflet.LeafletDirective, },
    ]; };
    LeafletPingDirective.propDecorators = {
        'pingOptions': [{ type: core.Input, args: ['leafletPingOptions',] },],
        'pingObserverReady': [{ type: core.Output, args: ['leafletPingObserver',] },],
    };
    return LeafletPingDirective;
}());

var LeafletD3Module = /** @class */ (function () {
    function LeafletD3Module() {
    }
    LeafletD3Module.forRoot = function () {
        return { ngModule: LeafletD3Module, providers: [] };
    };
    LeafletD3Module.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        ngxLeaflet.LeafletModule
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
    return LeafletD3Module;
}());

exports.LeafletD3Module = LeafletD3Module;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-leaflet-d3.js.map
