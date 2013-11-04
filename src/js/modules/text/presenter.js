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
		var parsedText = parseText(element.innerHTML, model.id);
		element.innerHTML = parsedText.text;
		for(var i in parsedText.gaps){
			var gap = parsedText.gaps[i];
			widgets.push(new GapWidget(gap.id, gap.answer));
		}
	}

	
	presenter._connectEvents = function(){
		this.eventBus.addEventListener('ShowErrors', this.setShowErrorsMode);
		this.eventBus.addEventListener('WorkMode', this.setWorkMode);
		this.eventBus.addEventListener('Reset', this.reset);
	}
	
	 presenter.setWorkMode = function () {
		 for(var i in widgets){
			 var gap = widgets[i];
			 gap.setWorkMode();
		 }
	 }

	 presenter.setShowErrorsMode = function () {
		 for(var i in widgets){
			 var gap = widgets[i];
			 gap.setShowErrorsMode();
		 }
	 }

	 presenter.reset = function () {
		 for(var i in widgets){
			 var gap = widgets[i];
			 gap.reset();
		 }
	 }

	return presenter;
}


function GapWidget(id, answer){
	var element = $('#' + id);

	this.setWorkMode = function(){
		element.prop('disabled', false);
	}
	
	this.setShowErrorsMode = function(){
		element.prop('disabled', true);
	}
	
	this.reset = function(){
		element.prop('disabled', false);
	}

	return this;
}