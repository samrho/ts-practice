let users = [
	{ id: 1, name: "ID", age: 32 },
	{ id: 2, name: "HA", age: 25 },
	{ id: 3, name: "BJ", age: 32 },
	{ id: 4, name: "PJ", age: 28 },
	{ id: 5, name: "JE", age: 27 },
	{ id: 6, name: "JM", age: 32 },
	{ id: 7, name: "HI", age: 24 },
];

let temp_users = [];
for (let i = 0, len = users.length; i < len; i++) {
	if (users[i].age < 30) temp_users.push(users[i]);
}

let ages = [];
for (let i = 0, len = temp_users.length; i < len; i++) {
	ages.push(temp_users[i].age);
}

// using built-in filter function of array
const users_under30 = users.filter((user) => user.age < 30);
