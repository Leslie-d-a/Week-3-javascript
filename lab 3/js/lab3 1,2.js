var multiply;
var result;
var number;
var i = 0;

result = 0;
multiply = 0;
multiply = prompt("nummer");

do {
	result = +result + +multiply;
	number = i + 1;
	document.write(number.toString() + " * " + multiply + " = " + result + "<br>");
	i++;
}
while (i < 10);