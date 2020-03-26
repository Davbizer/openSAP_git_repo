/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5/app1/db/newApp1_DB/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});