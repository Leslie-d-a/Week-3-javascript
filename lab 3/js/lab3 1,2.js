var multiply;
var result;
var number;
var i = 0;

result = 0;
multiply = 0;
multiply = prompt("nummer");

for (i = 0; i < 10; i++) {
	result = Number(result) + Number(multiply);
	number = i + 1;
	document.write(number.toString() + " * " + multiply + " = " + result + "<br>");;
};