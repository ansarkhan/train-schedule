var config = {
    apiKey: "AIzaSyAAcY2NfP7w8YTzprHrP77SGLAvMAi8c5c",
    authDomain: "bootcampak-48e6f.firebaseapp.com",
    databaseURL: "https://bootcampak-48e6f.firebaseio.com",
    projectId: "bootcampak-48e6f",
    storageBucket: "bootcampak-48e6f.appspot.com",
    messagingSenderId: "833308392906"
  };

firebase.initializeApp(config);

var database = firebase.database(); 

// create DOM elements

var DOMelements = {
    playerName: '#player-name',
    playerTwoName: '#player-2-name',
    checkIn: '#check-in',
    checkInTwo: '#check-in-2',
    playerOneChoice: '#player-1-choice',
    playerTwoChoice: '#player-2-choice',
    play: '#play',

}