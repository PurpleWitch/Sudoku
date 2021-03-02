var require = meteorInstall({"client":{"imports":{"components":{"todosList":{"todosList.html":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// client/imports/components/todosList/todosList.html                     //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
module.link("./template.todosList.js", { "*": "*+" });

////////////////////////////////////////////////////////////////////////////

},"template.todosList.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// client/imports/components/todosList/template.todosList.js              //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
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
  
////////////////////////////////////////////////////////////////////////////

}}}},"main.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// client/main.js                                                         //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
!function (module1) {
  var angular;
  module1.link("angular", {
    "default": function (v) {
      angular = v;
    }
  }, 0);
  var angularMeteor;
  module1.link("angular-meteor", {
    "default": function (v) {
      angularMeteor = v;
    }
  }, 1);
  var todosList;
  module1.link("./imports/components/todosList/todosList", {
    "default": function (v) {
      todosList = v;
    }
  }, 2);
  angular.module("simple-todos", [angularMeteor, todosList.name]);
}.call(this, module);
////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".ts",
    ".css"
  ]
});

var exports = require("/client/main.js");