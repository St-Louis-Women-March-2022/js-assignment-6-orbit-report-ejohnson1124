export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if (this.type === 'Space Debris') {
			return true;
   } else {
   		return false;
   }
}
}

// TODO 3a: fix isSpaceDebris check -- used if loop with this.type set to strict equal for space debris
