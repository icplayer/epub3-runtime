/*
 * Parser for interactive text
 * 
 * @author Krzysztof Langner
 */

function parseText(inputText) {
	var idCounter = 1;
	var gaps = [];
	var choices = [];
	var text = parse(inputText);
	return {text: text};
	
	
	function parse(text){
		var parsed = parseGaps(text);
		return parseChoices(parsed);
	}
	
	function parseGaps(text){
		var input = text;
		var output = "";
		var index = 0; 
		while((index = input.indexOf("\\gap{")) >= 0){
			output = input.substring(0, index);
			input = input.substring(index+5);
			var end = input.indexOf("}");
			var options = input.substring(0, end);
			var id = idCounter;
			idCounter += 1;
			var html = "<input id='" + id + "' type='edit' class='ic_gap'/>";
			output += html;
			input = input.substring(end+1);
		}
		return output + input;
	}
	
	function parseChoices(text){
		var input = text;
		var output = "";
		var index = 0; 
		while((index = input.indexOf("\\choice{")) >= 0){
			output = input.substring(0, index);
			input = input.substring(index+8);
			var end = input.indexOf("}");
			var options = input.substring(0, end);
			var id = idCounter;
			idCounter += 1;
			var html = "<select id='" + id + "' class='ic_inlineChoice'>";
			output += html;
			input = input.substring(end+1);
		}
		return output + input;
	}
}

