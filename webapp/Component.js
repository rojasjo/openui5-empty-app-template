sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
], (UIComponent, Device) => {
    "use strict";
    return UIComponent.extend("my.openui5.webapp.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
        },
        
        getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
    });
});