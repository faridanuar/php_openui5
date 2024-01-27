sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // -- Show a native or Vanilla JS alert
            // alert("Hello there from button!");

            // Read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            // Get value from oData, Format: variable = {recipient: {name: 'name here'}} => {/recipient/name}
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            // Set string that get value from i18n.properties file and set additional parameters in []
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // Use Module/Resources from SAPUI5 Library
            MessageToast.show(sMsg);
        },
        onOpenDialog: function () {
            var oView = this.getView();

            // Create the dialog
            if (!this.byId("helloDialog")) {
                // load asynchronously XML fragment file
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    // Connect this fragment to a controller
                    controller: this
                }).then(function (oDialog) {
                    // Connect dialog to the root view of this component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                this.byId("helloDialog").open();
            }
        },
        onCloseDialog: function () {
            this.byId("helloDialog").close();
        }
    })
});