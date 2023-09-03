const people= [
	{
firstName: 'John',
		lastName:'Doe',
		email: 'john@gmail.com',
		phone: '111-111-111-1111',
		age: 30,

},
	{
	firstName: 'Jane',
		latName: 'Poe',
		email:'jane@gmail.com',
		phone:'222-222-222',
		age:25,

	},
	{
	firstName: 'Sara',
		latName: 'Foe',
		email:'sara@gmail.com',
		phone:'333-3333-33',
		age:45,

	
	},
	{
	firstName: 'Bob',
		latName: 'Soe',
		email:'bob@gmail.com',
		phone:'222-222-222',
		age:19,

	
	},
	]


const youngpeople= people.filter((a)=> person.age<= 25)
.map((a) => ({
	name: person.firstName + ' ' + person.lastName,
	email: person.email,
}
				 ));
console.log(youngpeople);