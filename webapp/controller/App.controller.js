/**
 * Declare Controllers here
 */
sap.ui.define([
    // Import Modules/Resources/Assets
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    // "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict" // use strict error detection
    /**
     * Controllers
     */
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        /**
         * NOTE: onInit function moved to /view/component.js
         */
        // onInit: function () {
        //     // Set the data model on the view
        //     var oData = {
        //         recipient: {
        //             name: "Farid",
        //         }
        //     };
        //     // Set data to model
        //     var oModel = new JSONModel(oData);
        //     // Set model to view
        //     this.getView().setModel(oModel);

        //     // Set i18n (Translation) model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //         supportedLocales: [""],
        //         fallbackLocale: ""
        //     });
        //     // Set model to view, setModel(VAR, "ALIAS")
        //     this.getView().setModel(i18nModel, "i18n");
        // },

        // Logic here
        // Moved to HelloPanel.controller.js
        // onShowHello: function () {
        //     // -- Show a native or Vanilla JS alert
        //     // alert("Hello there from button!");

        //     // Read message from i18n model
        //     var oBundle = this.getView().getModel("i18n").getResourceBundle();
        //     // Get value from oData, Format: variable = {recipient: {name: 'name here'}} => {/recipient/name}
        //     var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //     // Set string that get value from i18n.properties file and set additional parameters in []
        //     var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        //     // Use Module/Resources from SAPUI5 Library
        //     MessageToast.show(sMsg);
        // }
    });
});