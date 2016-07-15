var expect = require('chai').expect

describe('CHARACTER CREATION', function() {
	var Character = require('../src/character')
		var character

	beforeEach(function() {
		character = new Character('lnw')
	})

	describe('characters name', function() {
		it('the characters name should be string', function() {
			expect(character.name).to.be.a('string')
		})
	})

	describe('characters status', function() {
		it('should include 3 status', function() {
			expect(Object.keys(character.status).length).to.equal(3)
		})

		it('should have properties str, agi, int and the whole property should be number', function() {
			expect(character.status).to.have.property('str').and.be.a('number')
			expect(character.status).to.have.property('agi').and.be.a('number')
			expect(character.status).to.have.property('int').and.be.a('number')
		})
	})

	describe('characters properties', function() {
		it('should include 8 properties', function() {
			expect(Object.keys(character.properties).length).to.equal(8)
		})

		it('should have level, exp, attk, mattk, aspd, def, hp, mp and the whole property should be number', function() {
			expect(character.properties).to.have.property('level').and.be.a('number')
			expect(character.properties).to.have.property('exp').and.be.a('number')
			expect(character.properties).to.have.property('attk').and.be.a('number')
			expect(character.properties).to.have.property('mattk').and.be.a('number')
			expect(character.properties).to.have.property('aspd').and.be.a('number')
			expect(character.properties).to.have.property('def').and.be.a('number')
			expect(character.properties).to.have.property('hp').and.be.a('number')
			expect(character.properties).to.have.property('mp').and.be.a('number')
		})

		
	})
})