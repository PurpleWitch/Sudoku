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