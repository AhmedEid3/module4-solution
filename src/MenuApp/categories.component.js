(function () {
"use strict";

angular
  .module("MenuApp")
  .component("categories", {
    templateUrl: 'src/MenuApp/template/categories.component.html',
    bindings: {
      categories: '<'
    }
  });

})();
