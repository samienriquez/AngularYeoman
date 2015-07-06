'use strict';

describe('Controller: IndexProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('proyecto1App'));

  var IndexProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexProfileCtrl = $controller('IndexProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
