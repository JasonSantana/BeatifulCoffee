// Open Nav

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", myFunction);

function myFunction() {
	let link = document.getElementById("links");
	link.classList.add("show");
}

// Close Nav

let close = document.getElementById("close");

close.addEventListener("click", () => {
	let link = document.getElementById("links");
	link.classList.remove("show");
});
