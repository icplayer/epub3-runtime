/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Runtime")

function html2dom(xmlString){
	var parser = new DOMParser();
	var html = "<div>" + xmlString + "</div>";
	return parser.parseFromString(html, "text/xml").firstChild;
}

test( "Create basic model", function() {
	var html = "<model> \
					<property name='id' value='cloze1'/> \
					<property name='isVisible' value='true'/> \
				</model>";
	var element = html2dom(html);
	var model = ModuleRuntime._loadModel(element);
	equal(model.id , "cloze1", "Check id property" );
	equal(model.isVisible , "true", "Check isVisible property" );
});

test( "Property with text", function() {
	var html = "<model> \
					<property name='text'>Sample text</property> \
				</model>";
	var element = html2dom(html);
	var model = ModuleRuntime._loadModel(element);
	equal(model.text , "Sample text", "Check text property" );
});
