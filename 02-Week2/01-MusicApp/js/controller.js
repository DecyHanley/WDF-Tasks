var w2MusicApp = angular.module('w2MusicApp',[]);

// Add a controller to the module.
w2MusicApp.controller('w2maCtrl', function($scope){
   this.doReverse = false;
   this.albums = ['The Man who sold the World','Born in the US'];
   this.genres = ['Glam Rock','Heartland Rock'];
   this.albumYears = ['1970','1984'];

   this.artists = [
     {
         name: "David Bowie",
         album: "The Man who sold the World",
         genre: "Glam Rock",
         albumYear: "1970"
     },
     {
         name: "Bruce Springsteen",
         album: "Born in the USA",
         genre: "Heartland Rock",
         albumYear: "1984"
     }
   ];
});
