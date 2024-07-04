function calculatePoints(speed) {
    const speedLimit = 70;  //The speed limit is constant at 70km/h
    let Points = 0;    // We use 'let' because the points will keep changing
    
    if (speed <= speedLimit) {
        console.log("Ok"); //prints OK when the speed is at 70 or below
    } else {
        Points = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${Points}`);
    }

    if (Points > 12) {
        console.log("License suspended"); //If the points are more 12 it prints License suspended 
    }
}

let speed = 400;
calculatePoints(speed);
// speedDetector(80);