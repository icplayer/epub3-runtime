/*
 * Runtime for activities embedded in html page.
 * 
 * @author Krzysztof Langner
 */

var ModuleRuntime = {
	factories: {},
	playerController: new PlayerController(),
	
	registerModule: function(typeName, presenter){
		this.factories[typeName] = presenter
	},
	
	run: function(){
		this._initModules();
	},
	
	_initModules: function(){
		for(var name in this.factories){
			var factory = this.factories[name];
			this._loadFactoryModules(name, factory);
		}
	},
	
	_loadFactoryModules: function(name, factory){
		var query = "div[module='" + name + "']";
		var _this = this;
		$(query).each(function(e){
			_this._loadModule(this, factory);
		});
	},
	
	_loadModule: function(element, factory){
		var model = this._loadModel(element);
		var presenter = factory();
		presenter.setPlayerController(this.playerController);
		presenter.run(element, model);
	},
	
	_loadModel: function(element){
		var parent = $(element);
		var model = {};
		var propertyNodes = $(parent.children("model")[0]).find("property");
		propertyNodes.each(function(){
			var name = $(this).attr("name");
			var value = $(this).attr("value");
			model[name] = value;
		});
		return model;
	}
	
}



$(function() {
	ModuleRuntime.run();
});