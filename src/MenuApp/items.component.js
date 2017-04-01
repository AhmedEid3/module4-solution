(function () {
"use strict";

angular
  .module("MenuApp")
  .component("items", {
    templateUrl: 'src/MenuApp/template/items.component.html',
    bindings: {
      items: '<'
    }
  });

})();
