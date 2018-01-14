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
  .when('/projects', {
    title: 'Projects',
    controller: 'ProjectsController',
    templateUrl: 'app/views/projects.html'
  })
  .when('/contact', {
    title: 'Contact',
    controller: 'ContactController',
    templateUrl: 'app/views/contact.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.run(['$rootScope', function($rootScope) {
  $rootScope.siteName = 'A Programmer personal page';
  $rootScope.homeTitle = 'Home';
  $rootScope.skillsTitle = 'Skills';
  $rootScope.projectsTitle = 'Projects';
  $rootScope.blogTitle = 'Blog';
  $rootScope.contactTitle = 'Contact';
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
