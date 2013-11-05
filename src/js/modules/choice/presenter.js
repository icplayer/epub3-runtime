ModuleRuntime.registerModule("Choice", Choice_create);

function Choice_create(){
	
	var presenter = function(){}
	var playerServices = null;
	var eventBus;

	
	presenter.setPlayerController = function(services){
		this.playerServices = services;
		this.eventBus = this.playerServices.getEventBus();
	}
	
	
	presenter.run = function(view, model){
	}
	
	return presenter;
}
