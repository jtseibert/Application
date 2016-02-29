var Tutti = angular.module('Tutti', ['ionic', 'Tutti.controllers', 'Tutti.services','plangular'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$rootScopeProvider', '$urlRouterProvider', function($stateProvider, $rootScopeProvider, $urlRouterProvider, plangularConfigProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.now-playing', {
    url: '/nowPlaying',
    views: {
      'tab-now-playing': {
        templateUrl: 'templates/tab-now-playing.html',
        controller: 'NowPlayingCtrl'
      }
    }
  })
  .state('tab.queues', {
    url: '/queues',
    views: {
      'tab-queues': {
        templateUrl: 'templates/tab-queues.html',
        controller: 'QueuesCtrl'
      }
    }
  })
  .state('tab.groups', {
    url: '/groups',
    views: {
      'tab-groups': {
        templateUrl: 'templates/tab-groups.html',
        controller: 'GroupsCtrl'
      }
    }
  })
  .state('tab.queue-detail', {
    url: '/queues/:queueId',
    views: {
      'tab-queues': {
        templateUrl: 'templates/queue-detail.html',
        controller: 'QueueDetailCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })
  .state('tab.create-queue', {
    url: '/queues/createQueue',
    views: {
      'create-Queue': {
        templateUrl: 'templates/create-queue.html',
        controller: 'CreateQueueCtrl'
      }
    }
  })
  .state('tab.create-group', {
    url: '/groups/createGroup',
    views: {
      'create-Group': {
        templateUrl: 'templates/create-group.html',
        controller: 'CreateGroupCtrl'
      }
    }
  })
  .state('tab.group-detail', {
    url: '/groups/:groupId',
    views: {
      'tab-groups': {
        templateUrl: 'templates/group-detail.html',
        controller: 'GroupDetailCtrl'
      }
    }
  })
  ;
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/queues');


  // initialize soundcloud
  plangularConfigProvider.clientId = '333ef2b6cd731d21245af1e242cfeaf6';
  
}]);
