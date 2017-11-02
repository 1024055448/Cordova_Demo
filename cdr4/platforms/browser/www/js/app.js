 angular.module('myApp', ['ui.router','myApp.Ctrl'])
 .config(function ($stateProvider,$urlRouterProvider) {      
        $stateProvider     
        .state('login', {
        url: '/login',
        views: {
            '': {
                  templateUrl: 'templates/login.html',
                  controller:'LoginCtrl'
            }
        }
        })
        .state('register',{
        url:'/register',
        views:{
            '':{
                templateUrl:'templates/register.html',
                controller:'registerCtrl'
            }
        }
        })
        .state('home',{
        url:'/home',
        views:{
            '':{
                templateUrl:'templates/home.html',
                controller:'homeCtrl'
            }
        }
        })
        .state('home.main1',{
        url:'/main1',
        views:{
            '':{
                templateUrl:'templates/main.html',
                controller:'mainCtrl'
            }
        }
        })
        .state('home.main2',{
         url:'/main2',
         views:{
            '':{
                templateUrl:'templates/main2.html',
                controller:'main2Ctrl'
            }
         }
        })
        .state('home.main3',{
            url:'/main3',
            views:{
                '':{
                    templateUrl:'templates/main3.html',
                    controller:'main3Ctrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/login');   
});  