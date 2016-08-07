describe "UNIT: app.directive", ->
  $rootScope = null
  $scope = null
  $compile = null
  el = null
  $el = null
  $body = $('body')
  simpleHtml = "<the-directive></the-directive>"

  beforeEach ->
    module 'app.directive', 'templates'

    inject ($injector)->
      $rootScope = $injector.get "$rootScope"
      $compile = $injector.get "$compile"

      $scope = $rootScope.$new()
      el = $compile(angular.element simpleHtml)($scope)
      return

    $body.append el
    $rootScope.$digest()
    $el = $("#bloc")
    return

  afterEach ->
    $body.empty()
    return

  it "should render the directive out in the DOM", ->
      expect($el.length).toEqual 1
      return
    
  it "should show the title", ->
      expect($el.find("#title").text()).toEqual "appCtrl title"
      return

  describe "test title modification", ->
    ctrl = null
    beforeEach ->
      
      return
    return

  return