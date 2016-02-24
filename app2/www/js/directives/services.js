angular.module('Tutti.services', [])

.factory('Queues', function() {

  var idCount = 0;
  var queues = [];

  return {
    all: function() {
      return queues;
    },
    remove: function(queue) {
      queues.splice(queues.indexOf(queue), 1);
      idCount--;
    },
    add: function(one, two, three) {
      queues.splice(queues.length, 0, {
        id: idCount,
        name: ('Queue '+(idCount+1)),
        settingOne: one,
        settingTwo: two,
        settingThree: three,
        face: 'img/musicNote.jpg'
      });
      idCount++;
    },
    get: function(queueId) {
      for (var i = 0; i < queues.length; i++) {
        if (queues[i].id === parseInt(queueId)) {
          return queues[i];
        }
      }
      return null;
    }
  };
});
