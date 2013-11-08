/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Choice module")

test( "Find choice by id", function() {
	var choice = $('#choice1');
	equal(choice.length, 1, "Looking for the choice module");
});

test( "Single choice uses radio buttons", function() {
	var choiceOption = $('#choice1-1').get(0);
	equal(choiceOption.type, "radio", "should be radio button");
});

test( "Single choice correct answer", function() {
	var choiceOption1 = $('#choice1-1');
	var choiceOption2 = $('#choice1-2');
	var choiceOption3 = $('#choice1-3');
	choiceOption2.attr("checked", true);
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(choiceOption1.is(':disabled') == true, "Option should be disabled");
	ok(!choiceOption1.hasClass("ic_soption-wrong"), "Wrong answer class");
	ok(choiceOption2.hasClass("ic_soption-correct"), "Correct answer class");
	ok(!choiceOption3.hasClass("ic_soption-wrong"), "Wrong answer class");
	eventBus.sendEvent("Reset", {});
	choiceOption2.attr("checked", false); 
});

test( "Single choice wrong answer", function() {
	var choiceOption1 = $('#choice1-1');
	choiceOption1.attr("checked", true);
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(choiceOption1.hasClass("ic_soption-wrong"), "Wrong answer class");
	eventBus.sendEvent("Reset", {});
	choiceOption1.attr("checked", false); 
});

test( "Multi choice uses check boxes", function() {
	var choiceOption = $('#choice2-1').get(0);
	equal(choiceOption.type, "checkbox", "should be radio button");
});

test( "Multi choice correct answer", function() {
	var choiceOption1 = $('#choice2-1');
	var choiceOption2 = $('#choice2-2');
	choiceOption1.attr("checked", true);
	choiceOption2.attr("checked", true);
	var eventBus = ModuleRuntime.playerController.getEventBus();
	eventBus.sendEvent("ShowErrors", {});
	ok(choiceOption1.is(':disabled') == true, "Option should be disabled");
	ok(choiceOption1.hasClass("ic_moption-wrong"), "Wrong answer class");
	ok(choiceOption2.hasClass("ic_moption-correct"), "Correct answer class");
	eventBus.sendEvent("Reset", {});
	choiceOption1.attr("checked", false);
	choiceOption2.attr("checked", false);
});
