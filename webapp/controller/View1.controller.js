sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", //library m, module MessageToast
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("project1.controller.App", {
      onInit: function () {
        //set a data model on the view
        var oData = {
          recipient: {
            name: "Jingwei",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        //set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "project1.i18n.i18n",
          suportedLocales: [""],
          fallbackLocales: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onSayHiButtonPress: function () {
        //read mesg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
