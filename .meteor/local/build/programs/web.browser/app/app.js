var require = meteorInstall({"client":{"imports":{"components":{"todosList":{"todosList.html":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// client/imports/components/todosList/todosList.html                                         //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.link("./template.todosList.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////////////////////////

},"template.todosList.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// client/imports/components/todosList/template.todosList.js                                  //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //

  var templateUrl = "client/imports/components/todosList/todosList.html";
  angular.module('angular-templates')
    .run(['$templateCache', function($templateCache) {
      $templateCache.put(templateUrl, "<header> <h1>Todo List</h1> </header> <ul> <li ng-repeat=\"task in $ctrl.tasks\">{{task.text}}</li> </ul>");
    }]);
  if (typeof exports !== 'undefined') {
    exports.__esModule = true;
    exports.default = templateUrl;
  }
  
////////////////////////////////////////////////////////////////////////////////////////////////

},"todosList.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// client/imports/components/todosList/todosList.js                                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
!function (module1) {
  let angular;
  module1.link("angular", {
    default(v) {
      angular = v;
    }

  }, 0);
  let angularMeteor;
  module1.link("angular-meteor", {
    default(v) {
      angularMeteor = v;
    }

  }, 1);
  let template;
  module1.link("./todosList.html", {
    default(v) {
      template = v;
    }

  }, 2);

  class TodosListCtrl {
    constructor() {
      this.tasks = [{
        text: "This is task 1"
      }, {
        text: "This is task 2"
      }, {
        text: "This is task 3"
      }];
    }

  }

  module1.exportDefault(angular.module("todosList", [angularMeteor]).component("todosList", {
    templateUrl: template,
    controller: TodosListCtrl
  }));
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"main.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// client/main.js                                                                             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
!function (module1) {
  let angular;
  module1.link("angular", {
    default(v) {
      angular = v;
    }

  }, 0);
  let angularMeteor;
  module1.link("angular-meteor", {
    default(v) {
      angularMeteor = v;
    }

  }, 1);
  let todosList;
  module1.link("./imports/components/todosList/todosList", {
    default(v) {
      todosList = v;
    }

  }, 2);
  angular.module("simple-todos", [angularMeteor, todosList.name]);
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");