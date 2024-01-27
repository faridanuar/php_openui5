/**
 * Application logic here
 * 
 * NOTE:
 * Avoid JS executable codes in the html file!
 */
// sap.ui.define([
//     /**
//      * Define Controls here.
//      * IMPORTANT: After defined, then pass it to the function(HERE) below
//      */
//     // "sap/m/Text" // Text (Control)

//     /**
//      * Define View using XML file
//      * IMPORTANT: This practice is for when you use App.view.xml file in the "/view" folder
//      */
//     "sap/ui/core/mvc/XMLView"

// ], function (XMLView) {
//     "use strict"; // Function call + Use strict error detection
    
//     /** Custom logic/controls starts here! */

//     // alert("UI5 is ready to go!");

//     // Controls
//     // new Text({
//     //     text: "Hello UI5 is Here!"
//     // }).placeAt("content") // html body id

//     XMLView.create({
//         /**
//          * viewName is based on the declared .resourceRoots in the index.html file
//          * 
//          * How it works:
//          * .view: Will search in /webapp/view folder
//          * .App: Will search for file with 'App' prefix. Exmple: App.view.xml
//          */
//         viewName: "sap.ui.demo.walkthrough.view.App"
//     }).then(function (oView) { // oView: View control
//         oView.placeAt("content");
//     });
// });

/**
 * Application logic here
 * 
 * NOTE: This version uses component.js compared to the code above.
 */
sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict"; // Function call + Use strict error detection

    // Use component that will set in the index.html
    new ComponentContainer({
        name: "sap.ui.demo.walkthrough",
        settings: {
            // Give ID
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");
});