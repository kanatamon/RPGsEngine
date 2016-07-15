var expect = require('chai').expect

describe('CHARACTER GROWTH', function() {
	var Character = require('../src/character')
	var character

	beforeEach(function() {
		character = new Character('lnw')
	})

	describe('setCharactersExp', function() {
		var setCharactersExp = require('../src/administrator').setCharactersExp

		it('should increase the characters exp correctly', function() {
			setCharactersExp(character, 2000)

			expect(character.properties.exp).to.equal(2000)
		})
	})

	xdescribe('isLevelUp', function() {
		var setCharactersExp = require('../src/administrator').setCharactersExp

	})
})