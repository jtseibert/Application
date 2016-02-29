angular.module('Tutti.services', [])

.factory('Queues', function() {

  var idCount = 0;
  var queues = [];

  return {
    allQueues: function() {
      return queues;
    },
    removeQueue: function(queue) {
      queues.splice(queues.indexOf(queue), 1);
      idCount--;
    },
    addQueue: function(name, one, two, three) {
      queues.splice(queues.length, 0, {
        id: idCount,
        name: (name),
        settingOne: one,
        settingTwo: two,
        settingThree: three,
        face: 'img/musicNote.jpg'
      });
      idCount++;
    },
    getQueue: function(queueId) {
      for (var i = 0; i < queues.length; i++) {
        if (queues[i].id === parseInt(queueId)) {
          return queues[i];
        }
      }
      return null;
    }
  };
})

.factory('Groups', function() {

  var idCount2 = 0;
  var groups = [];

  return {
    allGroups: function() {
      return groups;
    },
    removeGroup: function(group) {
      groups.splice(groups.indexOf(group), 1);
      idCount2--;
    },
    addGroup: function(name, one, two, three) {
      groups.splice(groups.length, 0, {
        // id: idCount2,
        // name: (name),
        // settingOne: one,
        // settingTwo: two,
        // settingThree: three,
        // face: 'img/musicNote.jpg'

        // Attempt at new Group settings
        id: idCount2,
        name:(name),
        settingOne: one,
        settingTwo: two,
        settingThree: three,
        face: 'img/musicNote.jpg',
        members: []
      });
      idCount2++;
    },
    addMember: function(group, name) {
      group.members.splice(0, 0, name);
    },
    removeMember: function(group, name) {
      // group.members.splice(groups.members.indexOf(name), 1);
      group.members.splice(group.members.indexOf(name), 1);
    },
    getGroup: function(groupId) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].id === parseInt(groupId)) {
          return groups[i];
        }
      }
      return null;
    }
  };
});
