/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Text module")

test( "Check html text", function() {
	var ps = $('#cloze_1 > p');
	ok(ps.length == 2, "Check number of paragraphs" );
});

test( "Find gap by id", function() {
	var gap = $('#cloze_1-1');
	ok(gap.length == 1, "Can't find gap" );
	ok(gap.is(':disabled') == false, "Shouldn't be disabled")
});

test( "Find choice by id", function() {
	var gap = $('#cloze_1-2');
	ok(gap.length == 1, "Can't find choice" );
	ok(gap.is(':disabled') == false, "Shouldn't be disabled")
});

test( "In ShowErrors mode gap should be disabled", function() {
	var gap = $('#cloze_1-1');
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.is(':disabled') == true, "Gap should be disabled");
	eventBus.sendEvent("Reset", {});
});

test( "Check error style in In ShowErrors mode", function() {
	var gap = $('#cloze_1-1');
	gap.val("wrong");
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.hasClass("ic_gap-wrong"), "Gap should have class wrong");
	eventBus.sendEvent("Reset", {});
	ok( !gap.hasClass("ic_gap-wrong"), "Clear wrong class");
});

test( "Check correct style in In ShowErrors mode", function() {
	var gap = $('#cloze_1-1');
	gap.val("correct");
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.hasClass("ic_gap-correct"), "Gap should have class correct");
	eventBus.sendEvent("Reset", {});
	ok( !gap.hasClass("ic_gap-correct"), "Clear correct class");
});

test( "In ShowErrors mode choice should be disabled", function() {
	var gap = $('#cloze_1-2');
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.is(':disabled') == true, "Choice should be disabled")
	eventBus.sendEvent("Reset", {});
});

test( "Check choice error style in In ShowErrors mode", function() {
	var gap = $('#cloze_1-2');
	gap.val("ala");
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.hasClass("ic_inlineChoice-wrong"), "Gap should have class wrong");
	eventBus.sendEvent("Reset", {});
	ok( !gap.hasClass("ic_inlineChoice-wrong"), "Clear wrong class");
});

test( "Check choice correct style in In ShowErrors mode", function() {
	var gap = $('#cloze_1-2');
	gap.val("correct");
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(gap.hasClass("ic_inlineChoice-correct"), "Gap should have class correct");
	eventBus.sendEvent("Reset", {});
	ok( !gap.hasClass("ic_inlineChoice-correct"), "Clear correct class");
});
