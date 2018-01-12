import { expect } from 'chai';

describe('Test Function that takes in a number and prints out an array of even and odd numbers', () => {
    it('Should return an array of even and odd numbers', () => {
        expect(takeInNumberAndReturnAnArray([1, 2, 3, 4, 5, 6])).to.equal([1, 3, 5], [2, 4, 6]);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.members([1,2,3,4,5,6]);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.lengthOf(6);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.all.keys([0,1,2,3,4,5]);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.be.an('array').that.includes(2);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.be.an('array').that.is.not.empty;
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.not.include(7);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.not.include(7).and.not.include(8);
    });
    it('Input should be an array of numbers', () => {
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.be.an('array');
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.members([1,2,3,4,5,6]);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.lengthOf(6);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.have.all.keys([0,1,2,3,4,5]);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.be.an('array').that.includes(2);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.be.an('array').that.is.not.empty;
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.not.include(7);
        expect(takeInNumberAndReturnAnArray([1,2,3,4,5,6])).to.not.include(7).and.not.include(8)
    });
    it('Should be a single number', () => {
        expect(takeInNumberAndReturnAnArray(3)).to.equal([1,3], [2]);
        expect(takeInNumberAndReturnAnArray(3)).to.not.be.an('array');
        expect(takeInNumberAndReturnAnArray(3)).to.be.a('number');
    });
    it('Should create an array of even and odd numbers if a single number is passed in', () => {
        expect(takeInNumberAndReturnAnArray(7)).to.equal([1,3,7], [2,4,6]);
        expect(takeInNumberAndReturnAnArray(7)).to.be.a('number');
    });
    it('Should throw an error if a string is passed in', () => {
        expect(takeInNumberAndReturnAnArray('a happy string')).to.equal('Please enter a number or an array of numbers');
    });
    it('Should throw an error if a boolean value is supplied', () => {
        expect(takeInNumberAndReturnAnArray(false)).to.equal('Please enter a number or an array of numbers');
    });
    it('Should throw an error if an object of numbers is passed in', () => {
        expect(takeInNumberAndReturnAnArray({ number1: 1, numberTwo: 2 })).to.equal('Please enter a number or an array of numbers');
    });
    it('Should throw an error if an array of strings is passed in', () => {
        expect(takeInNumberAndReturnAnArray(['Hello', 'World'])).to.equal('Please enter a number or an array of numbers');
    });
    it('Should throw an error if an object of strings is passed in', () => {
        expect(takeInNumberAndReturnAnArray({ stringOne: 'first', stringTwo: 'Two' })).to.equal('Please enter a number or an array of numbers')
    });
});
