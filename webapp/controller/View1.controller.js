sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", //library m, module MessageToast
    "sap/ui/model/json/JSONModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel) {
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
      },

      onSayHiButtonPress: function () {
        MessageToast.show("Hello there");
      },
    });
  }
);
