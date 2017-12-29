import { Directive, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
import { LeafletPingEvent } from '../../leaflet-d3/ping/leaflet-ping-event.model';
var LeafletPingDirective = /** @class */ (function () {
    function LeafletPingDirective(leafletDirective, zone) {
        this.zone = zone;
        this.pingObserverReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletPingDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.zone.runOutsideAngular(function () {
            _this.pingLayer = L.pingLayer(_this.pingOptions).addTo(map);
            // Handle incoming ping events
            // Handle incoming ping events
            _this.pingSource = Observable.create(function (observer) {
                _this.pingObserver = observer;
                _this.pingObserverReady.emit(_this.pingObserver);
            })
                .subscribe(function (event) {
                if (null != event) {
                    _this.ping(event.data, event.cssClass);
                }
            });
        });
    };
    /**
     * Submit a ping to the ping layer.
     *
     * @param data Contains the lat/lon information to generate the ping
     * @param cssClass Optional parameter specifying the css class to apply to the ping
     */
    /**
         * Submit a ping to the ping layer.
         *
         * @param data Contains the lat/lon information to generate the ping
         * @param cssClass Optional parameter specifying the css class to apply to the ping
         */
    LeafletPingDirective.prototype.ping = /**
         * Submit a ping to the ping layer.
         *
         * @param data Contains the lat/lon information to generate the ping
         * @param cssClass Optional parameter specifying the css class to apply to the ping
         */
    function (data, cssClass) {
        var _this = this;
        if (null != this.pingLayer) {
            this.zone.runOutsideAngular(function () {
                _this.pingLayer.ping(data, cssClass);
            });
        }
    };
    LeafletPingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[leafletPing]'
                },] },
    ];
    /** @nocollapse */
    LeafletPingDirective.ctorParameters = function () { return [
        { type: LeafletDirective, },
        { type: NgZone, },
    ]; };
    LeafletPingDirective.propDecorators = {
        "pingOptions": [{ type: Input, args: ['leafletPingOptions',] },],
        "pingObserverReady": [{ type: Output, args: ['leafletPingObserver',] },],
    };
    return LeafletPingDirective;
}());
export { LeafletPingDirective };
//# sourceMappingURL=leaflet-ping.directive.js.map