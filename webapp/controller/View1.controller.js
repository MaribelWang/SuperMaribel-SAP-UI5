sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", //library m, module MessageToast(pop-up)
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("project1.controller.App", {
      onSayHiButtonPress: function () {
        //read mesg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
