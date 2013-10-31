/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Text parser")

test( "Parse static text", function() {
	var parsedText = parseText("This is a text");
	ok( parsedText.text == "This is a text", "Can't parse text" );
});
