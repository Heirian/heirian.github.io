var app = angular.module('HeirianApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    title: 'Home',
    controller: 'HomeController',
    templateUrl: 'app/views/home.html'
  })
  .when('/skills', {
    title: 'Skills',
    controller: 'SkillsController',
    templateUrl: 'app/views/skills.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.run(['$rootScope', function($rootScope) {
  $rootScope.siteName = 'A Programmer personal page';
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
