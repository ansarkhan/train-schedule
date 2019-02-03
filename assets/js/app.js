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

    console.log("hello!");

    database.ref('/trains').push(train);

    $('#name').val('');
    $('#destination').val('');
    $('#first-train').val('');
    $('#frequency').val('');

}

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    addTrain();
});



database.ref('/trains').on("child_added", function(childSnapshot) {
    // console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;


    // Minutes away
    // current time - next arrival
    var now = moment(new Date());
    var initTime = moment(firstTrain, 'hh:mm');
    var duration = moment.duration(now.diff(initTime)).asMinutes();
    diffy = duration % frequency;
    minsAway = Math.round(frequency - diffy);

  
    // Next arrival
  
    // Create the new row
    var newRow = 
    $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text('Next Arrival'), // add next arrival
    $("<td>").text(minsAway) // add minutes away
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });



// var m = moment(new Date());
// console.log(m);

// initTime = "11:35"
// frequencyMin = 15;


// var calcArrival = function() {
//     var t = moment(initTime, 'HH:mm');

//     var duration = moment.duration(m.diff(t));
//     var minutes = duration.asMinutes();
//     console.log(minutes);
//     diffe = minutes % frequencyMin;
//     timeL = frequencyMin - diffe;
//     console.log('time till next train: ' + timeL);


// }

// calcArrival();

//   var convertedDate = moment(randomDate, randomFormat);

  // Using scripts from moment.js write code below to complete each of the following.
  // Console.log to confirm the code changes you made worked.

  // 1 ...to convert the randomDate into three other date formats
  // console.log(convertedDate.format("MM/DD/YY"));
  // console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));