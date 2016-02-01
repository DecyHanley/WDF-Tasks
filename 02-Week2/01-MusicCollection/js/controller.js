var w2MusicCollection = angular.module('w2MusicCollection',[]);

w2MusicCollection.controller('w2mcCtrl', function($scope) {
  this.doReverse = false;
  this.artists = ['David Bowie', 'Bruce Springsteen']

  this.albums = [{
     image: "img/bowie1.jpg",
     artist: "David Bowie",
     name: "The Man who sold the World",
     genre: "Glam Rock",
     year: "1970"
  },{
    image: "img/bowie2.png",
    artist: "David Bowie",
    name: "Heroes",
    genre: "Art rock",
    year: "1977"
  },{
     image: "img/springsteen1.jpg",
     name: "Born in the USA",
     artist: "Bruce Springsteen",
     genre: "Heartland Rock",
     year: "1984"
   }];
});
