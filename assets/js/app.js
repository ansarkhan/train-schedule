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

  
    var nextArrival = now.add(minsAway, 'minutes').format('LT')
  
    // Create the new row
    var newRow = 
    $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival), // add next arrival
    $("<td>").text(minsAway) // add minutes away
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
