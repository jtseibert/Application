angular.module('Tutti.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('QueuesCtrl', function($scope, $stateParams, $state, Queues) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$scope.queues = Queues.all();
$scope.remove = function(queue) {
  Queues.remove(queue);
};
$scope.create = function() {
  $state.go('tab.create-queue');
};
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

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
     { text: 'Cancel' },
     {
       text: '<b>Save</b>',
       type: 'button-positive',
       onTap: function(e) {
         if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
       ]
     });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
 };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };
 })

.controller('AccountCtrl', function($scope) {
  $scope.services = {
    soundCloud: true
  };
});
