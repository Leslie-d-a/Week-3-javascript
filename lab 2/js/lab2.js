// Leslie den Adel
// Ik volg de opleiding Software developer op het DaVinci college in Dordrecht

var name;//maakt variabele aan
var sirName;
var age;

//geeft een popup met de tekst: U zal nu 3 vragen dienen in te vullen
alert("U zal nu 3 vragen dienen in te vullen.");
			
//laat een prompt zien die zegt dat je je voornaam moet invullen
name = prompt("Vul je voornaam in");
			
//laat een prompt zien die zegt de je je achternaam moet invullen
sirName = prompt("Vul je achternaam in");
		
//laat een prompt zien die zegt dat je je leeftijd moet invullen
age = prompt("vul je leeftijd in");

//laat alles wat je hebt beantwoord zien op de pagina
document.write(name + " " + sirName + " - " + age);