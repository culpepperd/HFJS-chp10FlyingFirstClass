// passengers variable references an array of passenger objects
var passengers = [ { name: "Jane Forloop", paid: true },
                   { name: "Dr. Evel", paid: true },
                   { name: "Sue Property", paid: false },
                   { name: "John Funcall", paid: true } ];

function processPassengers(passengerArray, testFunction) {
    for (var i = 0; i < passengerArray.length; i++){
        if(testFunction(passengerArray[i])) {
            return false;
        }
    }
    return true;
}

// print passenger's names and paid status
function passengerInfo(passengerObj) {
    if(passengerObj.paid) {
        console.log(passengerObj.name + " has paid.");
    } else {
        console.log(passengerObj.name + " has not paid.");
    }
    
}

function checkNoFlyList(passengerObj) {
    return (passengerObj.name === "Dr. Evel");
}

function checkNotPaid(passengerObj) {
    return (!passengerObj.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, passengerInfo);