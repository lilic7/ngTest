// Generated by CoffeeScript 1.10.0
(function() {
  var AppController;

  AppController = function(AppService) {
    var app;
    app = this;
    app.title = "appCtrl title";
    app.max = function(a, b) {
      return AppService.max(a, b);
    };
  };

  AppController.$inject = ['AppService'];

  angular.module("app.controller", ['app.service']).controller("AppController", AppController);

}).call(this);

//# sourceMappingURL=app.controller.js.map
