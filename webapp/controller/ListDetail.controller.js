sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "project1/utilities/utilities",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (
    Controller,
    History,
    MessageToast,
    utilities,
    Filter,
    FilterOperator
  ) {
    "use strict";
    return Controller.extend("project1.controller.ListDetail", {
      /**
       * @override
       */
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter
          .getRoute("listDetail")
          .attachPatternMatched(this._routeMatched, this);
      },
      _routeMatched: function (oEvent) {
        var sPath =
          "ODATA>/ProductSet('" + oEvent.getParameter("arguments").ID + "')";
        this.getView().bindElement(sPath);
      },
    });
  }
);
