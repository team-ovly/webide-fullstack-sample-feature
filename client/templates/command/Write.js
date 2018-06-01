define({

	sTag: "OVLY",

	execute: function() {
		this.context.service.log.info(this.sTag, "Hi from OVLY!");
		this.context.service.log.warn(this.sTag, "Hi from OVLY!");
		this.context.service.log.error(this.sTag, "Hi from OVLY!");
	},

	isAvailable: function() {
		return true;
	},

	isEnabled: function() {
		return true;
	}
});