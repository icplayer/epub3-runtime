/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Text parser")

test( "Parse static text", function() {
	var parsedText = parseText("This is a text");
	equal(parsedText.text, "This is a text", "Can't parse text" );
});

test( "Parse gap", function() {
	var parsedText = parseText("This is a \\gap{answer}", "cloze1");
	equal(parsedText.text, "This is a <input id='cloze1-1' type='edit' class='ic_gap'/>", "Can't parse gap" );
	equal(parsedText.gaps.length, 1, "There should be single gap" );
	var gap = parsedText.gaps[0];
	equal(gap.id, "cloze1-1", "Check gap id");
	equal(gap.answer, "answer", "Check gap answer");
});


test( "Parse inline choice", function() {
	var parsedText = parseText("This is a \\choice{correct|ala|ola}", "cloze1");
	var expected =  "This is a " + 
					"<select id='cloze1-1' class='ic_inlineChoice'>" +
						"<option value='-'>---</option>" + 
						"<option value='ala'>ala</option>" +
						"<option value='correct'>correct</option>" + 
						"<option value='ola'>ola</option>" + 
					"</select>";
	equal(parsedText.choices.length, 1, "There should be single choice" );
	var gap = parsedText.choices[0];
	equal(gap.id, "cloze1-1", "Check gap id");
	equal(gap.answer, "correct", "Check gap answer");
});
