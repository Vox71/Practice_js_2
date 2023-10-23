class User {
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    sayHi() {
      alert(`${this.name}`);
      return(`${this.name}`)
    }
  }

  global.Users = [
	new User(1, "Miha"),
	new User(2, "Mikhail"),
	new User(3, "Mikelle"),
	new User(4, "Lizon Puzon")
]

const findId = (id) => {

}