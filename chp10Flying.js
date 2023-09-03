// passengers variable references an array of passenger objects
var passengers = [ { name: "Jane Forloop", paid: true, ticket: "coach" },
                   { name: "Dr. Evel", paid: true, ticket: "firstClass" },
                   { name: "Sue Property", paid: false, ticket: "premium" },
                   { name: "John Funcall", paid: true, ticket: "coach" } ];

// main function to Process Passengers
function processPassengers(passengerArray, testFunction) {
    for (var i = 0; i < passengerArray.length; i++){
        if(testFunction(passengerArray[i])) {
            return false;
        }
    }
    return true;
}

// function to create a drink order dependent on ticket type
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstClass") {
        orderFunction = function() {
            alert("Would you like wine or a cocktail?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like water, cola or wine?");
        };
    } else { // defaults to coach
        orderFunction = function() {
            alert("Would you like water or cola?");
        };
    }
    return orderFunction;
}

// function to create a drink order dependent on ticket type
function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstClass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        };
    } else { // defaults to coach
        orderFunction = function() {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

// main function to Serve Passengers
function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

// function to Serve Customer
function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

// print passenger's names and paid status
function printPassengerInfo(passengerObj) {
    if(passengerObj.paid) {
        console.log(passengerObj.name + " has paid their " + passengerObj.ticket + " ticket.");
    } else {
        console.log(passengerObj.name + " has not paid their " + passengerObj.ticket + " ticket.");
    }
}

function checkNoFlyList(passengerObj) {
    return (passengerObj.name === "Dr. Evel");
}

function checkNotPaid(passengerObj) {
    return (!passengerObj.paid);
}

/*
var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}
*/

// processPassengers(passengers, printPassengerInfo);
servePassengers(passengers);