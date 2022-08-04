// MTA Lab

// Objectives:
// - Apply your knowledge of Javascript to solve a real world problem.
// - Get really good at array manipulation and JS data structures.

// Activity
// - Create a program that models a simple subway system.
// - The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

console.log() shows output similar to this:
"You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
"Change at Union Square."
"Your journey continues through the following stops: 23rd, 28th, 33rd."
"7 stops in total."

// - There are 3 subway lines:
//      - The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//      - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//      - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//      - All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)

// - Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// - Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

// Hints:
// - Work out how you would do it on paper first! Then start to explain that process in Javascript.
// - < done> 👉 Get the program to work for a single line (in any direction) before trying to tackle multiple lines. 👈
// - Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code.
// - Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// - The key to the lab is finding the index positions of each stop. (hint: indexOf())
// - Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// Objects
// const subwayLinesArrayObject = [ 
// {lineName: "N", lineStops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th', null]}, 
// {lineName: "L", lineStops: [null, null, '8th', '6th', 'Union Square', '3rd', '1st']},
// {lineName: "6", lineStops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place', null]}, 
// ];

const subwayLines = {
    lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th', null],
    lineL: [null, null, '8th', '6th', 'Union Square', '3rd', '1st'],
    line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place', null]
};

// Object
// const planTrip = function ('N', 'Times Square', 'L', '1st')
const planTrip = function (startLine, startLineStop, endLine, endLineStop) {
    // Same Line 
    if (startLine === endLine) { 
        // - Forward
        if (subwayLines[startLine].indexOf(startLineStop) < subwayLines[endLine].indexOf(endLineStop)) {
            let stopsToPass = [];
            for (let i = (subwayLines[startLine].indexOf(startLineStop) + 1); i < subwayLines[endLine].indexOf(endLineStop); i++) {
                stopsToPass.push(subwayLines[startLine][i]);
                console.log(stopsToPass);
            }
            console.log(`You would stay on ${startLine} and travel ${subwayLines[endLine].indexOf(endLineStop) - subwayLines[startLine].indexOf(startLineStop)} stops. You would travel through the following stops: ${stopsToPass.join(", ")}. Your desitnation is ${endLineStop}`) 
        }
        // - Backward
        else {
            let stopsToPass = [];
            for (let i = (subwayLines[startLine].indexOf(startLineStop)-1); i > subwayLines[endLine].indexOf(endLineStop); i--) {
                stopsToPass.push(subwayLines[startLine][i]);
                console.log(stopsToPass);
            }
            console.log(`You would stay on ${startLine} and travel ${subwayLines[startLine].indexOf(startLineStop) - subwayLines[endLine].indexOf(endLineStop)} stops. You would travel through the following stops: ${stopsToPass.join(", ")}. Your desitnation is ${endLineStop} `)
        }
    }
    // Different Line
    if (startLine !== endLine) {
        // startLineStop to US 
        // US to endLineStop
        console.log (`You would travel ${Math.sqrt((subwayLines[startLine].indexOf(startLineStop) - subwayLines[startLine].indexOf('Union Square'))**2)} stop/s to Union Square to change to the ${endLine}. Then you would travel ${Math.sqrt((subwayLines[endLine].indexOf('Union Square') - subwayLines[endLine].indexOf(endLineStop))**2)} stop/s to ${endLineStop}`)
    }
} 

// Array
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th', null ];
const lineL = [null, null, '8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place', null];

// Array
const planTrip = function (startLine, startLineStop, endLine, endLineStop) {
    // Same Line 
    // - Forward
    if (startLine === endLine) { 
        if (startLine.indexOf(startLineStop) < endLine.indexOf(endLineStop)) {
            return `You would stay on the same line and travel ${endLine.indexOf(endLineStop) - startLine.indexOf(startLineStop)} stops.`
        }
        else {
            return `You would stay on the same line and travel ${startLine.indexOf(startLineStop) - endLine.indexOf(endLineStop)} stops.`
        }
    }
    if (startLine != endLine) {
        // return `You would travel ${Math.sqrt((startLine.indexOf(startLineStop) - startLine.indexOf('Union Square'))^2)} stops to Union Square to change to the `}
        return `You would travel ${Math.sqrt((startLine.indexOf(startLineStop) - startLine.indexOf('Union Square'))**2)} stop/s to Union Square to change to the XXX line. Then you would travel ${Math.sqrt((endLine.indexOf('Union Square') - endLine.indexOf(endLineStop))**2)} stops to ${endLineStop}`}
}

// Hard coded test calls
planTrip('lineN', 'Times Square', 'line6', 'Grand Central')
planTrip('lineN', '34th', 'line6', 'Grand Central')

// Stops on the same line
planTrip('lineN', 'Times Square', 'lineN', '8th')
planTrip('lineN', '8th', 'lineN', 'Times Square')