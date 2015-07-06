'use strict';

describe('Controller: NewProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('proyecto1App'));

  var NewProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewProfileCtrl = $controller('NewProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
