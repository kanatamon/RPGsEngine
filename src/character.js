'use strict'

class Character {
	constructor(name) {
		this.name = name
		this.status = {
			'str': 1,
			'agi': 1,
			'int': 1
		}
	 	this.properties = {
			'level': 1,
			'exp': 1,
			'attk': 1,
			'mattk': 1,
			'aspd': 1,
			'def': 1,
			'hp': 1,
			'mp': 1
		}
	}
}

module.exports = Character