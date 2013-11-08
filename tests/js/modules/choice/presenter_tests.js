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

test( "Multi choice uses check boxes", function() {
	var choiceOption = $('#choice2-1').get(0);
	equal(choiceOption.type, "checkbox", "should be radio button");
});
