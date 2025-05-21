/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-value")

// allows to input only nums and delimeter
inputEl.addEventListener("input", function(e) {
	const val = e.target.value
	const newVal = val.replace(/[^0-9.]/g, '')
	e.target.value = newVal
})

function convertValues() {	
	const inputValue = Number(inputEl.value)
	if (inputValue >= 1) {
		lengthEl.innerHTML = `${inputValue} метр = ${(inputValue * 3.281).toFixed(3)} фут | ${inputValue} фут = ${(inputValue / 3.281).toFixed(3)} метр`
		volumeEl.innerHTML = `${inputValue} литр = ${(inputValue * 0.264).toFixed(3)} галлон | ${inputValue} галлон = ${(inputValue / 0.264).toFixed(3)} литр`
		massEl.innerHTML = `${inputValue} килограмм = ${(inputValue * 2.204).toFixed(3)} фунт | ${inputValue} фунт = ${(inputValue / 2.204).toFixed(3)} килограмм`
	} else {
		window.location.reload()
	}
}