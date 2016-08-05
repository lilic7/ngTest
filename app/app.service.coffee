AppService = ->
    #add code here
    {
      max: max
    }
#all fuctions definition comes here
max = (a, b)->
  if a is b 
    return "Same numbers"
  if a > b then a else b

angular
    .module "app.service", []
    .service "AppService", AppService