let person = {
    name: "Betty",
    age: "12",
    location: "Abuja"
};

console.log(person.name);
console.log(person.age);

//adding a new property
person["gender"] = "Female";
console.log(person);

//updating a new property
person["age"] = 6;
console.log(person);