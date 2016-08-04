AppDirective = (AppController)->
  directive =
    restrict: 'E'
    controller: AppController
    controllerAs: 'appCtrl'
    template: "<div>THE DIRECTIVE</div>"
  directive

AppDirective.$inject = ['AppController']
angular
  .module "app.directive",
  [
    'app.controller'
  ]
  .directive "theDirective", AppDirective