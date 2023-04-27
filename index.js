//document.getElementById("count").innerText = 5
let count = 0
saveEl = document.getElementById("save-el")
countEl = document.getElementById("count")
function increment(){
	count += 1
	countEl.innerText = count
}

function save(){
	let countStr = count + " - "
	saveEl.textContent += countStr
	countEl.innerText = count
	count = 0
}