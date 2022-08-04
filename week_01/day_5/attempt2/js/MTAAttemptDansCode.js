
const mta = {

    stops: {
        n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        l: ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }, 

    findIndex: function (line, stop) {
        return this.stops[line].indexOf(stop)
    }, // end of the findIndex function

    giveStopList: function (line1, stop1, line2, stop2){ 
        // this function finds the index of the first and second stop and creates a presentable list of the stops that need to be travelled on
        firstStop = this.findIndex(line1, stop1); 
        secondStop = this.findIndex(line2, stop2); 
        listOfStopsInArray = this.stops[line1].slice(firstStop, (secondStop + 1)); 
        presentableList = listOfStopsInArray.join(', ')

        return `Get on the ${line1.toUpperCase()} line and use these stops ${presentableList}`
    }, // end of giveStopList 

    giveStopListUnionSquare: function (line, stop) {
        firstStop = this.findIndex(line, stop); 
        secondStop = this.findIndex(line, 'Union Square'); 
        listOfStopsInArray = this.stops[line].slice(stop, (secondStop + 1)); 
        presentableList = listOfStopsInArray.join(', ');
        console.log(`First use the ${line.toUpperCase()} line and use these stops: ${presentableList}`)
    },

    reverseLineOrder: function (line) {
        this.stops[`${line}`].reverse()
    },

    planTrip: function (line1, stop1, line2, stop2) { 
        if (line1 === line2) {
            // same line and the order is correct 
            if (this.findIndex(line1, stop1) < this.findIndex(line2, stop2)) {
                console.log(`${this.giveStopList(line1, stop1, line2, stop2)}`)
            }
            else { 
                this.reverseLineOrder(line1)
                console.log(`${this.giveStopList(line1, stop1, line2, stop2)}`)
            }
        } 
        else {
           // the request is to go from one line to another. Use the giveStopList UnionSquare to give the user the stops that are needed to get to Union Square
            this.giveStopListUnionSquare(line1, stop1); 

            if (this.findIndex(line2, 'Union Square') < this.findIndex(line2, stop2)) {
                // this is for users who need to change lines but the order is still in the right direction. They go to the trandfer station (union square) and use that trasfer station as the first stop of the second part of the journey. 
                console.log(`You need to change lines at Union Square`)
                console.log(`${this.giveStopList(line2, 'Union Square', line2, stop2)}`)
            }
            else {
                this.reverseLineOrder(line2)
                console.log(`You need to change lines at Union Square`)
                console.log(`${this.giveStopList(line2, 'Union Square', line2, stop2)}`)
            }
        }
    }
}


// Testing Ground - Hard Coded Lines 

console.log(mta.findIndex('n', '34th'))
console.log(mta.giveStopList('n', '34th', 'n', '8th'))
console.log(mta.giveStopListUnionSquare('n', '34th'))
console.log(mta.planTrip('n', '34th', '6', 'Grand Central'))