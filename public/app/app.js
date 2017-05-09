activeUser = null;

angular.module('userApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/pages/home.html'
      })
      .when('/home', {
        templateUrl: '/app/views/pages/home.html'
      })
      .when('/contact', {
        templateUrl: '/app/views/pages/contact.html'
      })
      .when('/canAssist', {
        templateUrl: '/app/views/pages/canAssist.html'
      })
      .when('/overview', {
        templateUrl: '/app/views/pages/overview.html'
      })
      .when('/team', {
        templateUrl: '/app/views/pages/team.html'
      })
      .when('/timeline', {
        templateUrl: '/app/views/pages/timeline.html'
      })
    $locationProvider.html5Mode(true);
}])
.filter('trustUrl', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
