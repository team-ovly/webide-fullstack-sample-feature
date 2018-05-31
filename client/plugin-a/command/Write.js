define({

	sTag: "OVLY",

	execute: function() {
		return this.context.service.log.info(this.sTag, "Hi from OVLY!");
	},

	isAvailable: function() {
		return true;
	},

	isEnabled: function() {
		return true;
	}
});