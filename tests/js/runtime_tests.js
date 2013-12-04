/*
 * QUnit tests
 * 
 * @author Krzysztof Langner
 */

module ("Runtime")

function html2dom(xmlString){
	var parser = new DOMParser();
	var html = "<div>" + xmlString + "</div>";
	element = parser.parseFromString(html, "text/xml").firstChild;
	return element;
}

test( "Create basic model", function() {
	var html = "<model> \
					<property name='id' value='cloze1'/> \
					<property name='isVisible' value='true'/> \
				</model>";
	var element = html2dom(html);
	var model = ModuleRuntime._initModel(element);
	equal(model.id , "cloze1", "Check id property" );
	equal(model.isVisible , "true", "Check isVisible property" );
});

test( "Property with text", function() {
	var html = "<model> \
					<property name='text'><p>Sample text</p></property> \
				</model>";
	var element = html2dom(html);
	var model = ModuleRuntime._initModel(element);
	equal(model.text , "Sample text", "Check text property" );
});

test( "List property", function() {
	var html = "<model> \
					<property name='options' type='list'> \
						<items> \
							<item> \
								<property name='text'>Option 1</property> \
							</item> \
							<item> \
								<property name='text'>Option 1</property> \
							</item> \
							<item> \
								<property name='text'>Option 1</property> \
							</item> \
						</items> \
					</property> \
				</model>";
	var element = html2dom(html);
	var model = ModuleRuntime._initModel(element);
	equal(model.options.length , 3, "There are 3 options" );
	equal(model.options[0].text , "Option 1", "Check first option name" );
});
