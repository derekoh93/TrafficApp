'use strict';

/**
 * @ngdoc function
 * @name GetYourWeather.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the GetYourWeather
 */
 angular.module('GetYourWeatherApp')
   .controller('MainCtrl', function ($scope, citysearch) {
     $scope.citiesFound = citysearch.find();

     $scope.findCities = function(){
         $scope.citiesFound = citysearch.find({
             query: $scope.location
         });
         $scope.searchQuery = $scope.location;
     };
   });
