/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("project1.Component", {
      metadata: {
        rootView: {
          viewName: "project1.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          recipient: {
            name: "Jingwei",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        //set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "project1.i18n.i18n",
          suportedLocales: [""],
          fallbackLocales: "",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
