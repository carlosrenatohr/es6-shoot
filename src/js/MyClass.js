export class Child {
	constructor(age = 10) {
		this.age = age;
	}
	static getCedula() {
		let CedField = Symbol.for('cedula')
		let myCed = Symbol('001-150395-0002F');
		console.log(`My age is ${this.age}!!!`);
		return {
			name: 'Carlos',
			[CedField]: [myCed],
			'cedula': 50
		}

	}
	static lol() {
		console.log('looool');
	}
}
let yourChild = new Child(5);
let myChild = new Child(8);
let herChild = new Child();

export {yourChild, herChild};
export default myChild