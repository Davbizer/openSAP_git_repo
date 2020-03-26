sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"

], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("sapui5.app1.db.newApp1_DB.controller.Products", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapui5.app1.db.newApp1_DB.view.Products
		 */
		onInit: function () {

		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("home", {}, true);
			}
		},

		onListPress: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("ProductDetails");

		},
		onPressListItem: function (oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("ProductDetail", {
					productID: oBindingContext.getProperty("ProductID")
				});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sapui5.app1.db.newApp1_DB.view.Products
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sapui5.app1.db.newApp1_DB.view.Products
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sapui5.app1.db.newApp1_DB.view.Products
		 */
		//	onExit: function() {
		//
		//	}

	});

});