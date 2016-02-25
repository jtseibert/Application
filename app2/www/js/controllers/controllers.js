angular.module('Tutti.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('QueuesCtrl', function($scope, $rootScope, $stateParams, $state, $ionicPopup, $timeout, Queues) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.queues = Queues.all();
  $scope.remove = function(queue) {
    Queues.remove(queue);
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
      title: 'Enter Name for New Queue',
      subTitle: 'Please use normal things',
      scope: $rootScope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Create</b>',
          type: 'button-positive',
          onTap: function(e) {
            //don't allow the user to hit save unless there is a name entered
            if ($scope.data.newName == undefined) {
              e.preventDefault();
            } else {
              $state.go('tab.create-queue');
              return $scope.data.newName;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      console.log('Name Received!', res);
    });
  };

  // A confirm dialog
  // $scope.showConfirm = function() {
  //   var confirmPopup = $ionicPopup.confirm({
  //     title: 'Consume Ice Cream',
  //     template: 'Are you sure you want to eat this ice cream?'
  //   });
  //   confirmPopup.then(function(res) {
  //     if(res) {
  //       console.log('You are sure');
  //     } else {
  //       console.log('You are not sure');
  //     }
  //   });
  // };
})

.controller('QueueDetailCtrl', function($scope, $stateParams, Queues) {
  $scope.queue = Queues.get($stateParams.queueId);
})

.controller('CreateQueueCtrl', function($scope, $stateParams, $state, Queues) {

  $scope.settings = {
    settingOne: true,
    settingTwo: true,
    settingThree: false
  };
  $scope.add = function() {
    Queues.add($scope.settings.settingOne, $scope.settings.settingTwo, $scope.settings.settingThree);
    $state.go('tab.queues');
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.services = {
    soundCloud: true
  };
});
