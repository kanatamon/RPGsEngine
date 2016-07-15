var expect = require('chai').expect

describe('CHARACTER CREATION SETUP', function() {
	var Character = require('../src/character')
	var character

	beforeEach(function() {
		character = new Character('lnw')
	})

	describe('name', function() {
		it('the characters name should be string', function() {
			expect(character.name).to.be.a('string')
		})
	})

	describe('status', function() {
		it('should include 3 status', function() {
			expect(Object.keys(character.status).length).to.equal(3)
		})

		it('should have properties str, agi, int and the whole property should be number', function() {
			expect(character.status).to.have.property('str').and.be.a('number')
			expect(character.status).to.have.property('agi').and.be.a('number')
			expect(character.status).to.have.property('int').and.be.a('number')
		})
	})

	describe('properties', function() {
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



describe('CHARACTER PROPERTY CALCULATION', function() {
	var Character = require('../src/character')
	var playerStatus
	var itemProp

	beforeEach(function() {
		playerStatus = {
			str: 1,
			agi: 1,
			int: 1,
		}

		itemProp = {
			attk: 12,
			mattk: 5,
			weight: 10,
			def: 2,
			hp: 10,
			mp: 12
		}
	})

	describe('calculateLevel', function() {
		it('should calculate correctly', function() {
			//FORMULA: level = exp / 1000
			expect(Character.calculateLevel(1000)).to.equal(1)
			expect(Character.calculateLevel(2499.99)).to.equal(2)
			expect(Character.calculateLevel(9000)).to.equal(9)
		})

		it('should return level 1 when exp is less than 1000', function() {
			expect(Character.calculateLevel(900)).to.equal(1)
			expect(Character.calculateLevel(-9)).to.equal(1)
		})

		it('should return level 99 when exp is more than 99,000', function() {
			expect(Character.calculateLevel(100000)).to.equal(99)
			expect(Character.calculateLevel(99000)).to.equal(99)
			expect(Character.calculateLevel(99000.01)).to.equal(99)
			expect(Character.calculateLevel(99001)).to.equal(99)
		})
	})

	describe('calculateAttk', function() {
		it('should calculate correctly', function() {
			//FORMULA: attk = (str * 2.2) + (agi * 0.8) + (item.weight * 0.4) + item.attk 
			//attk = 2.2 + 0.8 + 4 + 12 -> = **19
			expect(Character.calculateAttk(playerStatus, itemProp)).to.equal(19)
		})
	})

	describe('calculateDef', function() {
		it('should calculate correctly', function() {
			//FORMULA: def = (agi * 1.1) + (int * 1.1) + item.def
			//def = 1.1 + 1.1 + 2
			expect(Character.calculateDef(playerStatus, itemProp)).to.equal(4.2)
		})
	})
})

















































