describe "UNIT: app.service", ->
  appService = null

  beforeEach module "app.service"

  beforeEach inject ($injector)->
    appService = $injector.get "AppService"
    return

  it "should exist", ->
      expect appService
        .toBeDefined()
      return

  it "should calculate max of two numbers", ->
      result = appService.max 2, 5
      expect result
        .toEqual 5
      return

  it "should return message if numbers are equal", ->
      result = appService.max 3, 3
      expect result
        .toEqual "Same numbers"
      return

  return