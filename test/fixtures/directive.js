(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */

  /**
   * Create one directive per file. Name the file for the directive.
   *   https://github.com/johnpapa/angular-styleguide#style-y070
   */

  angular
    .module('app.directives')
    .directive('myDirective', myDirective);

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  function myDirective() {
    /**
     * When creating a directive that makes sense as a stand-alone element, allow restrict E (custom element) and optionally restrict A (custom attribute).
     * EA is the default for Angular 1.3 +
     *   https://github.com/johnpapa/angular-styleguide#style-y074
     */

    /**
     * Use "controllerAs" syntax with a directive to be consistent with using controller as with view and controller pairings.
     *   https://github.com/johnpapa/angular-styleguide#style-y075
     */

    /**
     * Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option.
     *   https://docs.angularjs.org/guide/directive
     */
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/my-directive/my-directive.directive.html',
      scope: {},
      controllerAs: 'vm',
      controller: MyDirectiveDirectiveController
    };

    return directive;
  }

  /**
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function MyDirectiveDirectiveController() {

  }
})();
