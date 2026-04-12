import { LeafletPingEvent } from './leaflet-ping-event.model';


describe('LeafletPingEvent', () => {

	it('should create an instance', () => {
		const event = new LeafletPingEvent();
		expect(event).toBeDefined();
	});

	it('should accept arbitrary data', () => {
		const event = new LeafletPingEvent();
		event.data = { lat: 38.9, lng: -77.0, value: 42 };
		expect(event.data.value).toBe(42);
	});

	it('should accept an optional cssClass', () => {
		const event = new LeafletPingEvent();
		event.cssClass = 'highlight';
		expect(event.cssClass).toBe('highlight');
	});

	it('should leave cssClass undefined when not set', () => {
		const event = new LeafletPingEvent();
		expect(event.cssClass).toBeUndefined();
	});

});
