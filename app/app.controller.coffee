AppController = (AppService)->
  app = @
  app.title = "appCtrl title"
  app.max = (a, b)-> AppService.max(a, b)
  return
AppController.$inject = ['app.service']
angular
  .module "app.controller",
  [
    'app.service'
  ]
  .controller "AppController", AppController