'use strict';

describe('Controller: EditWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('proyecto1App'));

  var EditWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditWorkCtrl = $controller('EditWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
