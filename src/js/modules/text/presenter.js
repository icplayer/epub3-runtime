ModuleRuntime.registerModule("Text", AddonText_create);

function AddonText_create(){
	
	var presenter = function(){}
	var playerServices = null;

	
	presenter.setPlayerController = function(services){
		playerServices = services;
	}
	
	
	presenter.run = function(view, model){
		
		element = view.getElementsByTagName('p')[0];
		element.innerHTML = "Picture:" + model['Text'];
			
		var button = document.getElementById('mybutton');
		button.onclick=function(){
			var module = playerController.getModule('ig1');
			module.hide();
		};
	}

	
	return presenter;
}
