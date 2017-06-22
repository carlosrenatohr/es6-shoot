export class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet(prefix) {
		console.log(prefix + 'New person is ' + this.name + '!');
	}
}

//let person = new Person('Carlos', 22);
let person = Reflect.construct(Person, ['Carlos', 20]); // 3rd param to change prototype
let executeReflect = () => {	
	console.log('Reflect prototype ', person.__proto__ == Person.prototype);
	//person.greet('..');
	Reflect.apply(person.greet, person, ['¡']);
	Reflect.apply(person.greet, {name: 'Renato'}, ['...']);

};

export {executeReflect};
