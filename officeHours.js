/*
var officeHours = [{ date: new Date(1995, 11, 17), learningFacilitator: 'Carolina', students: 10 }, {}, {}]
*/

var officeHours = [
    { 
        date: new Date(1995, 11, 17), 
        learningFacilitator: 'Carolina', 
    },
    {
        date: new Date(2022, 02, 28),
        learningFacilitator: 'Beyoncé',
    }
];

function greet(name1, name2) {
    return `Hello, ${name1}, ${name2}`;
}

console.log(greet('Katelyn', 'Sophie'))