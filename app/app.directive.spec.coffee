describe "UNIT: app.directive", ->
  element = null

  beforeEach module "app.directive"

  beforeEach module "app.template.html"


  beforeEach inject ($compile, $rootScope)->
    scope = $rootScope.$new()
    scope.size = 50
    element = angular.element "<the-directive size='30'></the-directive>"
    $compile(element)(scope)
    scope.$digest()
    return

  it "should display THE DIRECTIVE message ", ->
      expect(element.html()).toMatch(/THE DIRECTIVE/)
      return

  return