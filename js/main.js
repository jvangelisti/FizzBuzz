$(document).ready(function() {
	for (var fizzBuzz = 1; fizzBuzz < 101; fizzBuzz++)

	if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
		$("ul").append("<li> fizzbuzz </li>")
	}
	else if (fizzBuzz % 3 === 0) {
		$("ul").append("<li> fizz </li>")
	}
	else if (fizzBuzz % 5 === 0) {
		$("ul").append("<li> buzz </li>")
	}
	else {
		$("ul").append("<li>" + fizzBuzz + "</li>")
	}

	var number = prompt("Enter a number");

	function count(number) {
		return number;
	}
});