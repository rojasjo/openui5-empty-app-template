sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("my.openui5.webapp.controller.App", {
      onInit() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
    });
 });