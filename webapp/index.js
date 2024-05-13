sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "project1",
    settings: {
      id: "project1",
    },
    async: true,
  }).placeAt("content");
});
