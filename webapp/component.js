sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    /**
     * extend("resourceRoots.PATH_TO_COMPONENT") /webapp/component.js is root
     */
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            rootView:  {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true, // Set to run asynchronously
                "id": "app"
            }
        },
        /**
         * NOTE:
         * In component.js, when trying to set model the syntax is: this.setModel
         * but when in App.controller.js is: this.getView().setModel
         */
        init: function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // Set the data model on the view
            var oData = {
                recipient: {
                    name: "Farid",
                }
            };
            // Set data to model
            var oModel = new JSONModel(oData);
            // Set model to view
            this.setModel(oModel);

            // Set i18n (Translation) model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            // Set model to view, setModel(VAR, "ALIAS")
            this.setModel(i18nModel, "i18n");
        }
    })
});