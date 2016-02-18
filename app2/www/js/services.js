angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var idCount = 0;
  var chats = [];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
      idCount--;
    },
    add: function() {
      chats.splice(chats.length, 0, {
        id: idCount,
        name: ('Queue '+(idCount+1)),
        lastText: ('Setting '+(idCount+1)),
        face: 'img/musicNote.jpg'
      });
      idCount++;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
