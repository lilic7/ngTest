describe "UNIT: app.controller", ->
  appCtrl = null
  $injector = null
  beforeEach module "app.controller"

  beforeEach inject ($controller, _$injector_)->
    appCtrl = $controller "AppController"
    $injector = _$injector_
    return

  it "should exist", ->
      expect appCtrl
        .toBeDefined()
      return  

  it "should set title for appCtrl", ->
      expect appCtrl.title
        .toEqual "appCtrl title"
      return

  describe "using app.service", ->
    appService = null

    beforeEach ->
      appService = $injector.get "AppService"
      spyOn appService, 'max'
      return

    it "should call appService.max", ->
      appCtrl.max 5, 6
      expect appService.max
        .toHaveBeenCalled()
      return
    return


    return

  return