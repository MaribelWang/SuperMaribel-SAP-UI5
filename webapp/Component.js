sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("project1.Component", {
      metadata: {
        rootView: "project1.view.App",
        manifest: "json",
        coonfig: {
          serviceUrl: "webapp/model/models.json ",
        },
      },
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
