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

// var DOMelements = {
//     playerName: '#player-name',
//     playerTwoName: '#player-2-name',
//     checkIn: '#check-in',
//     checkInTwo: '#check-in-2',
//     playerOneChoice: '#player-1-choice',
//     playerTwoChoice: '#player-2-choice',
//     play: '#play',

// }

var addTrain = function() {
    name = $('#name').val().trim();
    destination = $('#destination').val().trim();
    firstTrain = $('#first-train').val().trim();
    frequency = $('#frequency').val().trim();

    var train = {
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };


    var newRow = 
        $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text('next arrival'),
        $("<td>").text('minutes away')
        );
    
      $("#train-table > tbody").append(newRow);

      database.ref().push(train);


}


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    addTrain();
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  });

// database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
  
//     // Store everything into a variable.
//     var empName = childSnapshot.val().name;
//     var empRole = childSnapshot.val().role;
//     var empStart = childSnapshot.val().start;
//     var empRate = childSnapshot.val().rate;
  
//     // Employee Info
//     console.log(empName);
//     console.log(empRole);
//     console.log(empStart);
//     console.log(empRate);
  
//     // Prettify the employee start
//     var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
  
//     // Calculate the months worked using hardcore math
//     // To calculate the months worked
//     var empMonths = moment().diff(moment(empStart, "X"), "months");
//     console.log(empMonths);
  
//     // Calculate the total billed rate
//     var empBilled = empMonths * empRate;
//     console.log(empBilled);
  
//     // Create the new row
//     var newRow = $("<tr>").append(
//       $("<td>").text(empName),
//       $("<td>").text(empRole),
//       $("<td>").text(empStartPretty),
//       $("<td>").text(empMonths),
//       $("<td>").text(empRate),
//       $("<td>").text(empBilled)
//     );
  
//     // Append the new row to the table
//     $("#employee-table > tbody").append(newRow);
//   });