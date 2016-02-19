var userdata = prompt("Enter a number");

function count(number) {
	return parseInt(number);
}

for (var number = 1; number <= userdata; number++){

	if (number % 3 === 0 && number % 5 === 0)
		console.log ("FizzBuzz");

	else if (number % 3 === 0)
		console.log ("Fizz");

	else if (number % 5 === 0)
		console.log ("Buzz");

	else
		console.log (number);
}