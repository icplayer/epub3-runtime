ModuleRuntime.registerModule("Text", AddonText_create);

function AddonText_create(){
	
	var presenter = function(){}
	var playerServices = null;
	var eventBus;
	var widgets = [];

	
	presenter.setPlayerController = function(service){
		this.playerController = service;
		this.eventBus = service.getEventBus();
		this._connectEvents();
	}
	
	
	presenter.run = function(view, model){
		element = view.getElementsByTagName('div')[0];
		var parsedText = parseText(element.innerHTML);
		element.innerHTML = parsedText.text;
	}

	
	presenter._connectEvents = function(){
		this.eventBus.addEventListener('ShowErrors', this.setShowErrorsMode);
		this.eventBus.addEventListener('WorkMode', this.setWorkMode);
	}
	
	 presenter.setWorkMode = function () {
	 }

	 presenter.setShowErrorsMode = function () {
	 }

	return presenter;
}


function GapWidget(elem){
	var element = elem;
	
	this.setWorkMode = function(){
		 console.log("Gap: Work mode"); 
	}
	
	this.setShowErrorsMode = function(){
		 console.log("Gap: Show errors mode");
	}

	return this;
}