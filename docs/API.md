# @bluehalo/ngx-leaflet-d3 — API Reference

> Full API reference. For installation and quick-start usage, see the [README](../README.md).

## Hexbins
There are several input and output bindings for the hexbin layer.
They are documented and demonstrated below.

```html
<div leaflet style="height: 300px;"
	 [leafletOptions]="options"
	 [leafletHexbin]="hexbinData"
	 [leafletHexbinOptions]="hexbinOptions"
	 (leafletHexbinMouseover)="mouseover($event)"
	 (leafletHexbinMouseout)="mouseout($event)"
	 (leafletHexbinClick)="click($event)"
	 (leafletHexbinLayerReady)="ready($event)">
</div>
```

### leafletHexbin
Input binding for the data array that is aggregated by the hexbins.

### leafletHexbinOptions
Input binding for hexbin options (see [Leaflet D3's](https://github.com/bluehalo/leaflet-d3) docs).
This allows you to set some basic settings for the hexbin layer.

### leafletHexbinMouseover
Event emitter/output binding for hexbin mouseover event (see [Leaflet D3's](https://github.com/bluehalo/leaflet-d3) docs).
This event is fired when the mouse hovers over a hexbin.

### leafletHexbinMouseout
Event emitter/output binding for hexbin mouseout event (see [Leaflet D3's](https://github.com/bluehalo/leaflet-d3) docs).
This event is fired when the mouse leaves a hexbin.

### leafletHexbinClick
Event emitter/output binding for hexbin click event (see [Leaflet D3's](https://github.com/bluehalo/leaflet-d3) docs).
This event is fired when the mouse clicks on a hexbin.

### leafletHexbinLayerReady
Event emitter/output binding for hexbin layer ready event.
This event is emitted after the hexbin layer has been created and includes a reference to the layer.
This provides an opportunity to do any advanced configuration not already supported by the directive.


## Pings
There is an input binding and an output binding for the ping layer.
They are documented and demonstrated below.

```html
<div leaflet style="height: 300px;"
     [leafletOptions]="options"
     leafletPing
     [leafletPingOptions]="pingOptions"
     (leafletPingObserver)="setLeafletPingObserver($event)">
</div>
```

### leafletPing
This is the directive attribute that activates the directive.

### leafletPingOptions
Input binding for the leaflet ping layer options (see [Leaflet D3's](https://github.com/bluehalo/leaflet-d3) docs).

### leafletPingObserver
Event emitter/output binding for ping layer observer.
The observer is how pings are emitted to the layer.

```js
setLeafletPingObserver(observer: Observer<any>) {

	this.leafletPingObserver = observer;

	// Start the ping loop
	setTimeout(this.generatePings.bind(this), 100);

}

private generatePings() {

	this.leafletPingObserver.next({
		data: [ 40, 50 ]  // [ lng, lat ]
	});

	setTimeout(this.generatePings.bind(this), 100);
}
```

The data schema for pings is: 
```js
leafletPingObserver.next(pingData: LeafletPingEvent)

class LeafletPingEvent {
	data: [lng, lat];
	cssClass?: string;
}
```
