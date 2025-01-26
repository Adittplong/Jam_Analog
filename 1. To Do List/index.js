const todolist = [];

//menambah TodoList
document.forms['todoForm'].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.info(todolist);
    displayTodoList();
};

//menampilkan todoList
function displayTodoList(){
    clearTodoList();

    for(let i = 0; i < todolist.length; i++){
        const todo = todolist[i];

        const searchText = document.getElementById("search").value.toLowerCase();

        if(todo.toLowerCase().includes(searchText)){
            addTodoList(i,todo);
        }

        
    }
}

//AddtoListDisplay
function addTodoList(index, todo){
    const tr = document.createElement("tr");
    const tdbtn = document.createElement("td");
    tr.appendChild(tdbtn);

    const btndone = document.createElement("input");
    btndone.value = "Done";
    btndone.type = "button";
    btndone.onclick = function(){
        removeTodolist(index);
    }
    tdbtn.appendChild(btndone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo)

    const todoListBody = document.getElementById("todoListBody");
    todoListBody.appendChild(tr);
}


//membuat cleartable
function clearTodoList(){
    const todoListBody = document.getElementById("todoListBody");
    while(todoListBody.firstChild){
        todoListBody.removeChild(todoListBody.firstChild);
    }
}

//membuat delete
function removeTodolist(index){

    
    todolist.splice(index, 1);
    displayTodoList();
}

//membuat Search
const searchInput = document.getElementById("search");
searchInput.onkeyup = () => displayTodoList();
searchInput.onkeydown = () => displayTodoList();
