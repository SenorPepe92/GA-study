

const mta = {

    stops: {
        n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        l: ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }, 

    findIndex: function(line, stop) {
        return this.stops[line].indexOf(stop)
    },

    giveStopList: function (line1, stop1, line2, stop2) {
        console.log(`Get on at line ${line1} and travel through these stops ${(this.stops[line1].slice(this.findIndex(line1, stop1), (this.findIndex(line2, stop2) + 1)).join(', '))}`) 
    }, 

    giveStopListUnionSquare: function(line, stop) {
        console.log(`Get on at line ${line} and travel through these stops ${(this.stops[line].slice(this.findIndex(line, stop), this.findIndex(line, 'Union Square')).join(', '))} and get off at Union Square`) 
    },

    reverseStops: function (line) {
        return this.stops[line].reverse()
    }, 

    planTrip: function (line1, stop1, line2, stop2) {
        // Single Line Trip 
        if (line1 == line2) {
            // Forward 
            if (this.findIndex(line1, stop1) < this.findIndex(line2, stop2)) {
                
                console.log( this.giveStopList(line1, stop1, line2, stop2) )
            }
            // Backward
            else {
                this.reverseStops(line1)
                console.log(this.giveStopList(line1, stop1, line2, stop2))
            }
        }
        else { 
            // Line 1 Forward 
            if (this.findIndex(line1, stop1) < this.findIndex(line1, 'Union Square')) {
                // and Line 2 Forward
                if ((this.findIndex(line2, 'Union Square') < this.findIndex(line2, stop2))) {
                this.giveStopListUnionSquare(line1, stop1)
                console.log('And change lines')
                this.giveStopList(line2, 'Union Square', line2, stop2)
                }
                // and line 2 is backward 
                else {
                    this.giveStopListUnionSquare(line1, stop1)
                    console.log('And change lines')
                    this.reverseStops(line2)
                    console.log(this.giveStopList(line2, 'Union Square', line2, stop2))
                }
            }
            // Line 1 is backward
            else {
                // and Line 2 Forward
                if ((this.findIndex(line2, 'Union Square') < this.findIndex(line2, stop2))) {
                    this.reverseStops(line1)
                    this.giveStopListUnionSquare(line1, stop1)
                    console.log('And change lines')
                    this.giveStopList(line2, 'Union Square', line2, stop2)
                }
                // and Line 2 Backward
                else { 
                    this.reverseStops(line1)
                    this.giveStopListUnionSquare(line1, stop1)
                    console.log('And change lines')
                    this.reverseStops(line2)
                    console.log(this.giveStopList(line2, 'Union Square', line2, stop2))
                }
            }
        }
    }
}


// Testing Ground - Hard Coded Lines 

// console.log(mta.findIndex('n', '28th'))
// console.log(mta.giveStopList('n', '34th', 'n', '8th'))
// console.log(mta.giveStopList('n', '34th', 'n', '23rd'))
// console.log(mta.giveStopListUnionSquare('n', '34th'))
// console.log(mta.reverseStops('n'))

// Single Line Forward
// console.log(mta.planTrip('n', 'Times Square', 'n', '8th'))

// Single Line Backward
// console.log(mta.planTrip('n', '8th', 'n', 'Times Square'))

//Multi Line Line 1 and 2 Forward 
console.log(mta.planTrip( 'n', 'Times Square', 'l', '1st'))
console.log('----------------')

//Multi Line Line 1 Forward and 2 Backward 
console.log(mta.planTrip( 'n', 'Times Square', 'l', '8th'))
console.log('----------------')

//Multi Line Line 1 Backward and 2 Forward 
console.log(mta.planTrip( 'n', '8th', 'l', '1st'))
console.log('----------------')

// Multi Line Line 1 Backward and 2 Backward 
console.log(mta.planTrip( 'n', '8th', 'l', '8th'))
console.log('----------------')


