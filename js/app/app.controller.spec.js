// Generated by CoffeeScript 1.10.0
(function() {
  describe("UNIT: app.controller", function() {
    var $injector, appCtrl;
    appCtrl = null;
    $injector = null;
    beforeEach(module("app.controller"));
    beforeEach(inject(function($controller, _$injector_) {
      appCtrl = $controller("AppController");
      $injector = _$injector_;
    }));
    it("should exist", function() {
      expect(appCtrl).toBeDefined();
    });
    it("should set title for appCtrl", function() {
      expect(appCtrl.title).toEqual("appCtrl title");
    });
    describe("using app.service", function() {
      var appService;
      appService = null;
      beforeEach(function() {
        appService = $injector.get("AppService");
        spyOn(appService, 'max');
      });
      it("should call appService.max", function() {
        appCtrl.max(5, 6);
        expect(appService.max).toHaveBeenCalled();
      });
      return;
    });
  });

}).call(this);

//# sourceMappingURL=app.controller.spec.js.map