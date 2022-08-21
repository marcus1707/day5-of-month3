const dollor = 11000.34;
const euro = 12000;

let ticket= 500;
	hotel = 250;
	enjoying = 120;

let ticket1 = ticket * dollor;
	hotel1 = hotel * dollor;
	enjoying1 = enjoying * euro;

let cost = ticket1 + hotel1 + enjoying1;

let balans = prompt('Please, enter your balans(in sum)');

if (balans >= cost) {
	console.log("Bon voyage");
} else {
	console.log(
		"Sorry, you haven't enough balans, please try again next time"
	);
}