sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        // Initialize your model and set it to the view
        const oModel = new sap.ui.model.json.JSONModel({
          recipient: {
            name: "World",
          },
        });
        this.getView().setModel(oModel);
      },
      onSayHiButtonPress() {
        alert("Hi");
      },
    });
  }
);
