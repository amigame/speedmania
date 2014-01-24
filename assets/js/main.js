var app;
var options = {};

// setup
construct.input(["keys"]);
// use construct.configure for custom logic or alternatively place it a separate file and include it in the 'deps' list...
construct.configure(function(){

	APP.Main = APP.Views.Main3D.extend({
		options: {
			url: "assets/html/game.html"
		},

		postRender: function(){

			this.objects.set({
			});

			this.layers.set({
			});

		}
	});

});


// init
construct(options, function( backbone ){

	app = backbone;

});
