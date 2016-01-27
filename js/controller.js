var w2MusicApp = angular.module('w2MusicApp',[]);

// Add a controller to the module.
w2MusicApp.controller('w2maCtrl', function($scope){
   this.doReverse = false;
   this.genres = ['Glam Rock','Heartline Rock',''];

   this.artists = [
       {
           name: "David Bowie",
           album: "The Man who sold the World",
           genre: "Glam Rock"
       },
       {
           name: "Bruce Springsteen",
           album: "Born in the USA"
           genre: "Heartland Rock"
       }
   ];
});
