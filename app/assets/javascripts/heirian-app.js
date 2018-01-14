var app = angular.module('HeirianApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    controller: 'HomeController',
    templateUrl: 'app/views/home.html'
  })
  .when('/photos/:id', {
    controller: 'SkillsController',
    templateUrl: 'app/views/skills.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
