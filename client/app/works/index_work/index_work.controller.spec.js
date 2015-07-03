'use strict';

describe('Controller: IndexWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('proyecto1App'));

  var IndexWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexWorkCtrl = $controller('IndexWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
