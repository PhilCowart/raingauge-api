'use strict'


var rainGaugeFactories = angular.module('rainGaugeFactories', []);
var rainGaugeDirectives = angular.module('rainGaugeDirectives', []);
var rainGaugeControllers = angular.module('rainGaugeControllers', []);
var rainGaugeFilters = angular.module('rainGaugeFilters', []);


var rainGauge = angular.module('rainGauge', [
	'ngRoute',
	'environment',
	'rainGaugeFactories',
	'rainGaugeDirectives',
	'rainGaugeControllers',
	'rainGaugeFilters',
	'satellizer',
])


.run( function($rootScope, $location) {

})


.controller('ApplicationCtrl', function( $scope, $auth ){


    // $scope.isAuthenticated = function() {
    //     return $auth.isAuthenticated();
    // };
   

})

