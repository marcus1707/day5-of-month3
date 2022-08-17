const dollor = 11000.34;
const euro = 12000;

let ticket= 500;
	hotel = 250;
	entertainment = 120;

let ticket1 = ticket * dollor;
	hotel1 = hotel * dollor;
	entertainment1 = entertainment * euro;

let cost = ticket1 + hotel1 + entertainment;

let balans = prompt('Please, enter your balans(in sum)');

if (balans >= cost) {
	console.log("Bon voyage");
} else {
	console.log(
		"Sorry, you haven't enough balans, please try again next time"
	);
}