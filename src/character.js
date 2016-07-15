'use strict'

class Character {
	constructor(name) {
		this.name = name

		this._properties = {
			'level': 1,
			'exp': 1,
			'attk': 1,
			'mattk': 1,
			'aspd': 1,
			'def': 1,
			'hp': 1,
			'mp': 1
		}

		this._status = {
			'str': 1,
			'agi': 1,
			'int': 1
		}
	}

	static calculateLevel(experience) {
		if(experience < 1000) {
			return 1
		}
		else if(experience > 99000) {
			return 99
		}

		return Math.floor(experience / 1000)
	}

	static calculateAttk(playerProperties, itemProperties) {
		//formula attk = (str * 2.2) + (agi * 0.8) + (item.weight * 0.4) + item.attk 
		return (playerProperties.str * 2.2) + (playerProperties.agi * 0.8) + (itemProperties.weight * 0.4) + itemProperties.attk 
	}

	static calculateDef(playerProperties, itemProperties) {
		//FORMULA: def = (agi * 1.1) + (int * 1.1) + item.def
		return (playerProperties.agi * 1.1) + (playerProperties.int * 1.1) + itemProperties.def
	}

	get properties() {
		return this._properties
	}

	get level() {
		return this._properties.level
	}

	get status() {
		return this._status
	}
}

module.exports = Character