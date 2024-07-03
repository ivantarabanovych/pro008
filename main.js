let person = {
    name: "Geralt",
    age: 100,
    universe: "The world of the witcher",
    occupation: "Witchcraft",
    powers: [
        "Telekinetic Strike", "Summons Flame", "Magic Trap", "Affects Enemy's Mind", "Protective Shield", "Sees in the Dark"
    ],

    introduce: function(){
        console.log(`Hello, I ${this.name}!`);
    }

};

console.log(person.name);
console.log(person.age);
console.log(person.universe);
console.log(person.occupation);
console.log(person.powers);

person.introduce();

let personJSON = JSON.stringify(person);
console.log(personJSON);

let personParceJSON = JSON.parse(personJSON)
console.log(personParceJSON);

delete person.age;
console.log(person);

console.log('age' in person);