export class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

export let person = Reflect.construct(Person, ['Carlos', 20]);

