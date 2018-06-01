define({

	init: function() {
		window._snippet_a = this;
		var _service = this.context.service;

		// _service.context.getCurrentDocument().then(function(oDocument) {
		// 	debugger;
		// });

		// _service.issues.setIssues("x", "y", "issue");
		// _service.progress.setVisible(true);
		// _service.progress.startTask("insertting snippet", "wait a little bit").then((id) => {
		// 	debugger;
		// 	setTimeout(_service.progress.stopTask(id).then(() => {
		// 		debugger;
		// 	}), 2000);

		// });

	},

	execute: function() {
		alert("snippet inserted");
	},

	isAvailable: function() {
		return true;
	},

	isEnabled: function() {
		return true;
	}
});