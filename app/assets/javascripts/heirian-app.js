var app = angular.module('HeirianApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    title: 'A Programmer personal page',
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
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
