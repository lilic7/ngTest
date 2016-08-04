// Generated by CoffeeScript 1.10.0
(function() {
  describe("UNIT: app.directive", function() {
    var $compile, $rootScope;
    $compile = null;
    $rootScope = null;
    beforeEach(module("app.directive"));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));
    it("should display THE DIRECTIVE message ", function() {
      var element;
      element = $compile("<the-directive></the-directive>")($rootScope);
      expect(element.html).toMatch(/THE DIRECTIVE/);
    });
  });

}).call(this);

//# sourceMappingURL=app.directive.spec.js.map