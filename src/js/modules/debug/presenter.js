
ModuleRuntime.registerModule("Debug", AddonDebug_create);

function AddonDebug_create(){
	
	var presenter = function(){}

	var element;
	var playerController;
	var mode = true;
	
	
	presenter.setPlayerController = function(service){
		playerController = service;
	}
	
	
	presenter.run = function(view, model){
		
		element = view.getElementsByTagName('p')[0];
		element.innerHTML = "Picture:" + model['Picture'];
			
		var button = document.getElementById('mybutton');
		button.onclick=function(){
			var module = playerController.getModule('ig1');
			module.hide();
		};
	}

	presenter.onEventReceived = function(eventName, eventData){
	
	}
	
	
	presenter.executeCommand = function(name, values){
		element.innerHTML = name + " " + values;			  
		return 'ok';
	}

	return presenter;
}
