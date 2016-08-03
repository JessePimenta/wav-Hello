var app = angular.module( 'app', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home');

$stateProvider

.state('home', {
  url: '/home',
  templateUrl: 'templates/home.html'
})
    .state( 'about', {
        url: '/about',
      templateUrl: 'templates/login.html'
    })
    .state( 'FAQ', {
        url:'/FAQ',
      templateUrl: 'templates/FAQ.html'
    });
  });
