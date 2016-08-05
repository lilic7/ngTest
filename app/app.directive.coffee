AppDirective = ()->
  {
    restrict    : 'E'
    controller  : "AppController"
    controllerAs: 'appCtrl'
    templateUrl : "app.template.html"
  }

angular
  .module "app.directive",
  [
    'app.controller'
  ]
  .directive "theDirective", AppDirective