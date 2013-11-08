ModuleRuntime.registerModule("Choice", Choice_create);

function Choice_create(){
	
	var presenter = function(){}
	var playerServices = null;
	var eventBus;
	var isMulti = false;

	
	presenter.setPlayerController = function(services){
		this.playerServices = services;
		this.eventBus = this.playerServices.getEventBus();
	}
	
	
	presenter.run = function(view, model){
		isMulti = (model.isMulti == "true");
		var html = createViewHtml(view, model);
		$(view).html(html);
	}
	
	
	function createViewHtml(element, model){
		element.id = model.id;
		var html = "";
		for( var index in model.options){
			var option = model.options[index];
			var optionId = model.id + "-" + index;
			html += "<div>";
			if(isMulti){
				html += "<input type='checkbox' name='" + model.id + "' id='" + optionId + "'/>";
			}
			else{
				html += "<input type='radio' name='" + model.id + "' id='" + optionId + "'/>";
			}
			html += "<label for='" + optionId + "'>" + option.text + "</label></div>";
		}
		return html;
	}
	
	return presenter;
}
