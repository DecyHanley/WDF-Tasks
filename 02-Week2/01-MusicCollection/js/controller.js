var w2MusicCollection = angular.module('w2MusicCollection',[]);

w2MusicCollection.controller('w2MusicCollectionCtrl', function($scope) {
  this.doReverse = false;
  this.artists = ['Bon Jovi', 'Bruce Springsteen', 'C418', 'David Bowie', 'Dean Martin', 'Imagine Dragons']

  this.albums = [{
    image: "img/bon-jovi-1.jpg",
    name: "Livin' on a Prayer",
    artist: "Bon Jovi",
    year: "1986",
    youtube: "https://www.youtube.com/watch?v=lDK9QqIzhwk"
  },{
    image: "img/bon-jovi-2.jpg",
    name: "It's my Life",
    artist: "Bon Jovi",
    year: "2000",
    youtube: "https://www.youtube.com/watch?v=vx2u5uUu3DE"
  },{
    image: "img/bruce-springsteen-1.JPG",
    name: "Born in the USA",
    artist: "Bruce Springsteen",
    year: "1984",
    youtube: "https://www.youtube.com/watch?v=EPhWR4d3FJQ"
  },{
    image: "img/bruce-springsteen-2.jpg",
    name: "Dancing in the Dark",
    artist: "Bruce Springsteen",
    year: "1984",
    youtube: "https://www.youtube.com/watch?v=129kuDCQtHs"
  },{
    image: "img/c418-1.jpg",
    artist: "C418",
    name: "Minecraft",
    year: "2011",
    youtube: "https://www.youtube.com/watch?v=qq-RGFyaq0U"
  },{
    image: "img/c418-2.jpg",
    artist: "C418",
    name: "Blind Spots",
    year: "2013",
    youtube: "https://www.youtube.com/watch?v=77Fv8gtZyuA"
  },{
    image: "img/david-bowie-1.jpg",
    artist: "David Bowie",
    name: "The Man who sold the World",
    year: "1970",
    youtube: "https://www.youtube.com/watch?v=Q7Bd3iJSFyE"
  },{
    image: "img/david-bowie-2.png",
    artist: "David Bowie",
    name: "Heroes",
    year: "1977",
    youtube: "https://www.youtube.com/watch?v=Tgcc5V9Hu3g"
  },{
    image: "img/dean-martin-1.jpg",
    name: "My Rifle, Pony and Me",
    artist: "Dean Martin",
    year: "1959",
    youtube: "https://www.youtube.com/watch?v=v2ssbgThljU"
  },{
    image: "img/dean-martin-2.jpg",
    name: "That's Amore",
    artist: "Dean Martin",
    year: "1953",
    youtube: "https://www.youtube.com/watch?v=OnFlx2Lnr9Q"
  },{
    image: "img/imagine-dragons-1.jpg",
    name: "Radioactive",
    artist: "Imagine Dragons",
    year: "2012",
    youtube: "https://www.youtube.com/watch?v=ktvTqknDobU"
  },{
    image: "img/imagine-dragons-2.jpg",
    name: "It's Time",
    artist: "Imagine Dragons",
    year: "2012",
    youtube: "https://www.youtube.com/watch?v=sENM2wA_FTg"
  }];
});
