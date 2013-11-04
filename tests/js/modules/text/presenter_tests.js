/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Text module")

test( "Find gap by id", function() {
	var gap = $('#cloze1-1');
	ok(gap.length == 1, "Can't find gap" );
	ok(gap.is(':disabled') == false, "Shouldn't be disabled")
});

test( "Find choice by id", function() {
	var gap = $('#cloze1-2');
	ok(gap.length == 1, "Can't find choice" );
	ok(gap.is(':disabled') == false, "Shouldn't be disabled")
});

test( "In ShowErrors mode gap should be disabled", function() {
	var gap = $('#cloze1-1');
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.is(':disabled') == true, "Gap should be disabled")
	eventBus.sendEvent("Reset", {});
});
