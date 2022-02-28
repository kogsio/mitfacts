var utils  = require('course-utilities');
var officeHours = utils.load('./officeHours.js', 'officeHours');
var greet = utils.load('./officeHours.js', 'greet');

describe('officeHours', () => {
    test('is an array', () => {
        expect(Array.isArray(officeHours)).toBe(true);
    })
})


describe('#greet', () => {
    test('returns correct string', () => {
        expect(greet('Katelyn')).toBe('Hello, Katelyn');
    })

    test('returns correct string uppercased', () => {
        expect(greet('Katelyn')).toBe('HELLO, KATELYN');
    })

    test.only('returns correct string with both names', () => {
        expect(greet('John Cena', 'Hailey')).toBe('Hello, John Cena, Hailey');
    })
});