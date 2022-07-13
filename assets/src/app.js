

const trash = `<svg class="trash" onclick="deleteItem(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>`

const check = `<svg class="check" onclick="checkedItem(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>`

const checked = `<svg class="checked" onclick="unCheckedItem(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/></svg>`

//
// For show date on header
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/**************************/


const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


function showDate() {

	var d = new Date();

	var day = d.getDate();
	var today = days[d.getDay()];
	var month = months[d.getMonth()];


	date.innerHTML = `${today}, ${month} ${day}`;

}


function addToDo() {
	if (input.value != "") {
		const text = `<li class="items"><button>${check}</button> <p>${input.value}</p> ${trash}</li>`

		const position = "beforeend";

		list.insertAdjacentHTML(position, text);
	}
	input.value = "";
}


function keyAddToDo() {
	const x = event.wich || event.keyCode;
	if (x == 13)
		addToDo();
}


function deleteItem(element) {
	var todolist = element.parentElement;
	todolist.remove();
}

function checkedItem(element) {

	var thisElement = element.parentElement;
	var nextElement = thisElement.nextElementSibling;


	nextElement.style.textDecoration = "line-through";
	nextElement.style.color = "rgba(0,0,0,.5)";



	thisElement.innerHTML = checked;

}


function unCheckedItem(element) {

	var thisElement = element.parentElement;
	var nextElement = thisElement.nextElementSibling;



	nextElement.style.textDecoration = "none";
	nextElement.style.color = "rgba(0,0,0,1)";



	thisElement.innerHTML = check;

}

