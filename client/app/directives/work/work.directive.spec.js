'use strict';

describe('Directive: work', function () {

  // load the directive's module and view
  beforeEach(module('proyecto1App'));
  beforeEach(module('app/directives/work/work.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<work></work>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the work directive');
  }));
});