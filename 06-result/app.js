// const car = {
// 	model: 'Tesla',
// 	year: 2023,
// };

// const json = JSON.stringify(car);
// console.log(json);
// const parsed = JSON.parse(json);
// console.log(parsed);

const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let USERS = [];

filter.addEventListener('input', (event) => {
	// console.log('input', event.target.value);
	const value = event.target.value.toLowerCase();
	const filteredUsers = USERS.filter((user) => {
		return user.name.toLowerCase().includes(value);
	});
	render(filteredUsers);
});

async function start() {
	list.innerHTML = 'Loading...';
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await resp.json();
		setTimeout(() => {
			USERS = data;
			render(data);
		}, 2000);
		// render(data);
		// console.log(resp);
		// console.log(data);
	} catch (err) {
		list.style.color = 'red';
		list.innerHTML = err.message;
	}
}

function render(users = []) {
	if (users.length === 0) {
		list.innerHTML = 'No matches users!';
	} else {
		const html = users.map(toHTML).join('');
		list.innerHTML = html;
	}
}

function toHTML(user) {
	return `
	<li class="list-group-item">${user.name}</li>
	`;
}

start();
