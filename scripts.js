var arr = [];
var num = Math.floor(Math.random() * 100 + 1);
var bool = 0;
var rem = 10;

function ret() {
	let prvg = document.getElementById("prvg");

	let remg = document.getElementById("remg");

	let x = "";

	for (const i of arr) {
		x += `${i}, `;
	}

	remg.innerText = rem;
	prvg.innerText = x;
}

document.addEventListener("keypress", (dets) => {
	if (dets.key == "Enter") {
		document.querySelector("button").click();
	}
});

document.querySelector("button").addEventListener("click", () => {
	const inp = document.querySelector("input");

	const fb = document.getElementById("feedback");
	if (isNaN(inp.value)) {
		fb.innerText = "Guess Numbers Only";
		rem--;
	} else if (inp.value > num) {
		rem--;
		fb.innerText = "This is too Larger";
	} else if (inp.value < num) {
		rem--;
		fb.innerText = "This one is Smaller";
	} else {
		const main = document.getElementById("main");
		main.innerHTML = `<div id="h10">WOWW... <br> YOU Won The Game... </div>`;
	}

	if (rem == 0) {
		const main = document.getElementById("main");
		main.innerHTML = `<div id="h10">OOPs ... <br> YOU Failed </div>`;
	}

	arr.push(inp.value);
	inp.value = "";
	ret();
});
