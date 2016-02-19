angular.module('Tutti.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $stateParams, $state, Chats) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.add = function() {
    $state.transitionTo('tab.create-queue');
    Chats.add();
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('CreateQueueCtrl', function($scope, $stateParams, Chats) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableStuff: true
  };
});
