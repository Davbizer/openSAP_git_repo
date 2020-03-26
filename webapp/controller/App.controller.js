sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Dialog", "sap/m/Button", "sap/m/library", "sap/m/Text", "sap/ui/core/Fragment"],
	function (Controller, Dialog, Button,
		mobileLibrary, Text, Fragment) {
		"use strict";
		// shortcut for sap.m.ButtonType
		var ButtonType = mobileLibrary.ButtonType;
		return Controller.extend("sapui5.app1.db.newApp1_DB.controller.App", {
			onInit: function () {},

			navigate: function () {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("Products");

			},

			onShowDialog: function () {
				var oDialog = new Dialog({
					type: ButtonType.Emphasized,
					title: 'Information',
					type: 'Message',
					state: 'Information',
					content: new Text({
						text: 'Dialog with value state Information.'
					}),
					beginButton: new Button({
						text: 'OK',
						press: function () {
							oDialog.close();
						}
					}),
					afterClose: function () {
						oDialog.destroy();
					}
				});

				oDialog.open();
			},

			onOpenDialogXML: function () {
				var oView = this.getView();

				// create dialog lazily
				if (!this.byId("helloDialog")) {
					// load asynchronous XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sapui5.app1.db.newApp1_DB.view.Dialog",
						controller: this
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					this.byId("DialogXML").open();
				}
			},

			onCloseDialog: function () {
				this.byId("DialogXML").close();

			},
			onAfterDialogClose: function (oEvent) {
				oEvent.getSource().destroy();
			}

		});
	});