var internetText = document.getElementById("inn");
var helloText = document.querySelector("h1.title");

internetText.addEventListener("click", () => {
	internetText.style.color = "yellow";
});

helloText.addEventListener("click", () => {
	helloText.style.color = "blue";
});