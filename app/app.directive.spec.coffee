describe "UNIT: app.directive", ->
  $compile = null
  $rootScope = null

  beforeEach module "app.directive"

  beforeEach inject (_$compile_, _$rootScope_)->
    $compile = _$compile_
    $rootScope = _$rootScope_
    return


  it "should display THE DIRECTIVE message ", ->
      element = $compile("<the-directive></the-directive>")($rootScope)
      expect(element.html).toMatch(/THE DIRECTIVE/)
      return
  return