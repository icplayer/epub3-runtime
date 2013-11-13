/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Ordering module")

test( "Find ordering by id", function() {
	var module = $('#ordering1');
	equal(module.length, 1, "Looking for the ordering module");
});
