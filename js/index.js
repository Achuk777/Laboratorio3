
document.getElementById("submitB").addEventListener("click", sub);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("mark").addEventListener("click", mark);
document.getElementById("delete").addEventListener("click", del);

function sub(){
	event.preventDefault();

	let postText=document.getElementsByClassName("newTodo")[0].value;
	let list=document.getElementsByClassName("listOfTodos")[0];
	let paragraph=document.createElement("p");
	let text = document.createTextNode(postText);
	let checkbox=document.createElement("input");

	paragraph.class="erasable";
	checkbox.type="checkbox";
	checkbox.name="check";

	paragraph.appendChild(text);
	paragraph.appendChild(checkbox);
	list.appendChild(paragraph);

	document.getElementsByClassName("newTodo")[0].value=null;
}

function clear(){
	let list=document.getElementsByName("check");

	for(let i=0;i < list.length; i++){
		list[i].checked=false;
	}
}

function mark(){
	let list=document.getElementsByName("check");

	for(let i=0;i < list.length; i++){
		list[i].checked=true;
	}

}

function del(){
	let parent=document.getElementsByClassName("listOfTodos")[0];
	let erasable=parent.getElementsByTagName("p");
	let iterator=erasable.length;
	for(let i=0;i < iterator;i++){
		parent.removeChild(erasable[0]);
	}
	
	
}

