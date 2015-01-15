angular.module('com.donaldparker', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	//$routeProvider.when('', {template:'asdf.html', controller:'PageAsdfCtrl'})
}])
.controller('AppCtrl', ['$scope', '$location', function($scope, $location){

}];