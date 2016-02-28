angular.module('Tutti.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('QueuesCtrl', function($scope, $rootScope, $stateParams, $state, $ionicPopup, $timeout, Queues) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.queues = Queues.allQueues();
  $scope.remove = function(queue) {
    Queues.removeQueue(queue);
  };
  $scope.create = function() {
    $state.go('tab.create-queue');
  };

  //popup section
  $scope.showPopup = function() {
    $rootScope.data = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.newName">',
      title: 'Enter Name for New PlayList',
      subTitle: 'Please use normal things',
      scope: $rootScope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Create</b>',
          type: 'button-positive',
          onTap: function(e) {
            //don't allow the user to hit save unless there is a name entered
            if ($rootScope.data.newName == undefined) {
              e.preventDefault();
            } else {
              $state.go('tab.create-queue');
              return $rootScope.data.newName;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      console.log('Name Received!', res);
    });
  };
})

.controller('CreateQueueCtrl', function($scope, $rootScope, $stateParams, $state, Queues) {

  $rootScope.settings = {
    settingOne: false,
    settingTwo: true,
    settingThree: false
  };
  $scope.add = function() {
    Queues.addQueue($rootScope.data.newName, $rootScope.settings.settingOne, $rootScope.settings.settingTwo, $rootScope.settings.settingThree);
    $state.go('tab.queues');
  };
})

.controller('QueueDetailCtrl', function($scope, $stateParams, Queues) {
  $scope.queue = Queues.getQueue($stateParams.queueId);
})

.controller('GroupsCtrl', function($scope, $rootScope, $stateParams, $state, $ionicPopup, $timeout, Groups) {

  $scope.groups = Groups.allGroups();
  $scope.remove = function(group) {
    Groups.removeGroup(group);
  };
  $scope.create = function() {
    $state.go('tab.create-group');
  };

  //popup section
  $scope.showPopup = function() {
    $rootScope.data = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.newName">',
      title: 'Enter Name for Your New Group',
      subTitle: 'Please use normal things',
      scope: $rootScope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Create</b>',
          type: 'button-positive',
          onTap: function(e) {
            //don't allow the user to hit save unless there is a name entered
            if ($rootScope.data.newName == undefined) {
              e.preventDefault();
            } else {
              $state.go('tab.create-group');
              return $rootScope.data.newName;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      console.log('Name Received!', res);
    });
  };
})

.controller('CreateGroupCtrl', function($scope, $rootScope, $stateParams, $state, Groups) {

  $rootScope.settings = {
    groupSettingOne: false,
    groupSettingTwo: true,
    groupSettingThree: false
  };
  $scope.addGroup = function() {
    Groups.addGroup($rootScope.data.newName, $rootScope.settings.groupSettingOne, $rootScope.settings.groupSettingTwo, $rootScope.settings.groupSettingThree);
    $state.go('tab.groups');
  };
})

.controller('GroupDetailCtrl', function($scope, $stateParams, Groups) {
  $scope.group = Groups.getGroup($stateParams.groupId);
})

.controller('AccountCtrl', function($scope) {
  $scope.services = {
    soundCloud: true
  };
});
