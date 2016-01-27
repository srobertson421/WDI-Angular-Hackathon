angular.module('MainGame', [])
.factory('Game', [function() {

  var game;

  return {
    init: function()  {
      game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: this.preload, create: this.create });
    },

    preload: function() {
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      game.stage.scale.refresh();
    },

    create: function() {},

    update: function() {}
  }
}]);