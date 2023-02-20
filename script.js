//your code here
var inputValue = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo() {
	if(inputValue.value){
		var li = document.createElement("li");
		li.textContent= inputValue.value;
		ol.appendChild(li);
		inputValue.value="";
	}
}
btn.addEventListener("click", addTodo);
