describe('Midway: Testing Modules', function () {

  describe('app.js:', function () {

    var module;
    before(function () {
      module = angular.module('ae');
    });

    it('should be registered', function () {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function () {

      var deps;
      var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
      };
      before(function () {
        deps = module.value('ae').requires;
      });

      //you can also test the module's dependencies
      it("should have ae.core as a dependency", function () {
        expect(hasModule('ae.core')).to.equal(true);
      });

      it("should have ae.layout as a dependency", function () {
        expect(hasModule('ae.layout')).to.equal(true);
      });

      it("should have ae.home as a dependency", function () {
        expect(hasModule('ae.home')).to.equal(true);
      });

    });
  });
});
