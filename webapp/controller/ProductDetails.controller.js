sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/base/Log",
	"../model/formatter"

], function (Controller, History, UIComponent, Log, formatter) {
	"use strict";

	return Controller.extend("sapui5.app1.db.newApp1_DB.controller.ProductDetails", {

		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapui5.app1.db.newApp1_DB.view.Products
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("ProductDetail").attachPatternMatched(this._onMatched, this);
		},

		_onMatched: function (oEvent) {
			Log.info(this.getView().getControllerName(), "_onMatched");
			var oArgs = oEvent.getParameter("arguments");
			this.getOwnerComponent().getModel().metadataLoaded().then(this._bindData.bind(this, oArgs.productID));
		},

		_bindData: function (id) {
			Log.info(this.getView().getControllerName(), "_bindData");

			var sObjectPath = this.getOwnerComponent().getModel().createKey("Products", {
				ProductID: id
			});

			this.getView().bindElement({
				path: "/" + sObjectPath,
				parameters: {
					expand: "Supplier"
				},
				events: {

					change: function () {
						Log.info(this.getView().getControllerName(), "_bindData change");
						this.getView().setBusy(false);
					}.bind(this),
					dataRequested: function () {
						Log.info(this.getView().getControllerName(), "_bindData dataRequested");
						this.getView().setBusy(true);
					}.bind(this),
					dataReceived: function () {
						Log.info(this.getView().getControllerName(), "_bindData dataReceived");
						this.getView().setBusy(false);
						if (this.getView().getBindingContext() === null) {
							this.getOwnerComponent().getRouter().getTargets().display("notFound");
						}
					}.bind(this)

				}
			});
			this.getOwnerComponent().getModel();
			this.getView().byId("supplierID");
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("Products", {}, true);
			}
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