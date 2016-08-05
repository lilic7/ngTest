describe "UNIT: app.directive", ->
  element = null

  beforeEach module "app.directive", "cache.tpl"


  beforeEach inject ($compile, $rootScope, $templateCache)->
    scope = $rootScope.$new()
    scope.size = 50
    element = $templateCache.get 'app.template.html'
    $compile(element)(scope)
    scope.$digest()
    return

  it "should display THE DIRECTIVE message ", ->
      expect(element.html()).toMatch(/THE DIRECTIVE/)
      return
  return