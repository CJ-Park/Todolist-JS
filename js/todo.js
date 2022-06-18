const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

function deleteToDo(e){
    const li = e.target.parentElement;
    li.remove();
    const ID = parseInt(li.id);
    toDos = toDos.filter(toDo => toDo.id !== ID);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodoObj){
    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.style.background = "none";
    btn.style.color = "red"
    btn.style.border = "none"
    btn.style.fontSize = "18px"
    btn.style.fontWeight = "600"
    btn.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(btn);
    toDoList.appendChild(list);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

console.log(savedToDos); 
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


