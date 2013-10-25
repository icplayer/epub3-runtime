ModuleRuntime.registerModule("Text", AddonText_create);

function AddonText_create(){
	
	var presenter = function(){}
	var playerServices = null;

	
	presenter.setPlayerController = function(services){
		playerServices = services;
	}
	
	
	presenter.run = function(view, model){
		element = view.getElementsByTagName('div')[0];
		var parsedText = parseText(element.innerHTML);
		element.innerHTML = parsedText;
	}

	
	return presenter;
}
