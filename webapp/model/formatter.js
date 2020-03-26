sap.ui.define([], function () {
	"use strict";

	return {

		statusText: function (sStatus) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},
		
		showMulitplicatorSign: function (sStatus){
				if(sStatus === null  ){
					return "Error with data binding";
				}
				
				var status = sStatus.toString();
				if(status.indexOf("-", 0) !== -1) {
					var returnval;
					returnval= status.replace("-", "x");
					return  returnval;
				}
				else{
					return status;
				}
		}
	};
});