// Generated by CoffeeScript 1.10.0
(function() {
  var AppService, max;

  AppService = function() {
    return {
      max: max
    };
  };

  max = function(a, b) {
    if (a === b) {
      return "Same numbers";
    }
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };

  angular.module("app.service", []).service("AppService", AppService);

}).call(this);

//# sourceMappingURL=app.service.js.map
