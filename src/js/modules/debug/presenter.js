ModuleRuntime.registerModule("Debug", AddonDebug_create);

function AddonDebug_create(){
	
	var presenter = function(){}

	var outputView;
	var playerController;
	
	
	presenter.setPlayerController = function(service){
		playerController = service;
	}
	
	presenter.onEventReceived = function(eventName, eventData){
	
		var html = 'Event: ' + eventName + "<br/> ";
		for(var key in eventData){
			html += key + ":" + eventData[key] + " | ";
		}
		outputView.innerHTML = html;
		console.log(html);
	}
	
	
	presenter.run = function(view, model){
		outputView = view;				
		playerController.getEventBus().addEventListener('ItemSelected', this);
		playerController.getEventBus().addEventListener('ItemConsumed', this);
		playerController.getEventBus().addEventListener('ItemReturned', this);
		playerController.getEventBus().addEventListener('ValueChanged', this);
		playerController.getEventBus().addEventListener('Definition', this);
		playerController.getEventBus().addEventListener('AllOk', this);
		playerController.getEventBus().addEventListener('PageLoaded', this);
		playerController.getEventBus().addEventListener('ShowErrors', this);
		playerController.getEventBus().addEventListener('WorkMode', this);
		playerController.getEventBus().addEventListener('Reset', this);
	}

	return presenter;
}
