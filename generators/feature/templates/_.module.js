/**
 * Separate configuration file for modules
 *   https://github.com/johnpapa/angular-styleguide#style-y128
 *   https://github.com/johnpapa/angular-styleguide#style-y127
 */
(function () {
  'use strict';

  /**
   * Declare modules with unique names
   *   https://github.com/johnpapa/angular-styleguide#style-y020
   * Declare modules without variables
   *   https://github.com/johnpapa/angular-styleguide#style-y021
   */
  angular.module('<%= appName %>.<%=moduleName%>', [
    /* module dependencies here */
  ]);
})();