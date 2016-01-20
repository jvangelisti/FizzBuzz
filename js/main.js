$(document).ready(function() {
	var fizzBuzz = 1;
	for (var fizzBuzz = 1; fizzBuzz < 101; fizzBuzz++)



	if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
		console.log ("fizz buzz");
	}
	else if (fizzBuzz % 3 === 0) {
		console.log ("fizz");
	}
	else if (fizzBuzz % 5 === 0) {
		console.log ("buzz");
	}
	else {
		console.log( fizzBuzz );
	}
});