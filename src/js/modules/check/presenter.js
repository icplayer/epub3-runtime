ModuleRuntime.registerModule("Check", AddonCheck_create);

function AddonCheck_create(){
	
	var presenter = function(){}
	var playerServices = null;

	
	presenter.setPlayerController = function(services){
		playerServices = services;
	}
	
	
	presenter.run = function(view, model){
	}

	
	return presenter;
}
