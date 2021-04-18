const btn = document.getElementById('btn');
const text = document.getElementById('p');
const body = document.body;

btn.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();

	const colorString = `RGB(${col1}, ${col2}, ${col3})`;

	body.style.background = colorString;
	text.innerText = colorString;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}
