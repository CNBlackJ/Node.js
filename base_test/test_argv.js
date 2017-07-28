class Show {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showName() {
		const name = this.name;
		return name;
	}

	showAge() {
		const age = this.age;
		return age;
	}
}

const show = new Show(age = 10);

console.log(show.showName())
console.log(show.showAge())