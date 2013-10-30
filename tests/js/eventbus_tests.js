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