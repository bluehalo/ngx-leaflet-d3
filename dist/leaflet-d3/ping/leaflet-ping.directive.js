import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
var LeafletPingDirective = (function () {
    function LeafletPingDirective(leafletDirective) {
        this.pingObserverReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletPingDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.pingLayer = L.pingLayer(this.pingOptions).addTo(map);
        // Handle incoming ping events
        this.pingSource = Observable.create(function (observer) {
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
export { LeafletPingDirective };
LeafletPingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[leafletPing]'
            },] },
];
/** @nocollapse */
LeafletPingDirective.ctorParameters = function () { return [
    { type: LeafletDirective, },
]; };
LeafletPingDirective.propDecorators = {
    'pingOptions': [{ type: Input, args: ['leafletPingOptions',] },],
    'pingObserverReady': [{ type: Output, args: ['leafletPingObserver',] },],
};
//# sourceMappingURL=leaflet-ping.directive.js.map