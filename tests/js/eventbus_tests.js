/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Event bus")

test( "Add handler", function() {
	var eventBus = new EventBus();
	eventBus.addEventListener("TestEvent", function(eventName, eventData){});
	ok( eventBus != null, "Can't create event bus!" );
});

test( "Add handler", function() {
	var eventBus = new EventBus();
	var receivedEvent = false;
	eventBus.addEventListener("TestEvent", function(eventName, eventData){
		receivedEvent = true;
	});
	eventBus.sendEvent('TestEvent', {});
	ok( receivedEvent, "Event not received" );
});

test( "Event without handler", function() {
	var eventBus = new EventBus();
	eventBus.sendEvent('TestEvent', {});
	ok( true, "Can't send event" );
});

test( "Add 2 handlers", function() {
	var eventBus = new EventBus();
	var eventCounter = 0;
	eventBus.addEventListener("TestEvent", function(eventName, eventData){
		eventCounter += 1;
	});
	eventBus.addEventListener("TestEvent", function(eventName, eventData){
		eventCounter += 1;
	});
	eventBus.sendEvent('TestEvent', {});
	ok( eventCounter == 2, "Expected 2 events. Received: " + eventCounter);
});

test( "Reset", function() {
	var eventBus = new EventBus();
	var receivedEvent = false;
	eventBus.addEventListener("TestEvent", function(eventName, eventData){
		receivedEvent = true;
	});
	eventBus.reset();
	eventBus.sendEvent('TestEvent', {});
	ok( !receivedEvent, "Event received after reset" );
});
