// I'm paranoid writing this without types, please give TypeScript back to me, why am i doing this in JS

const TODO_LIST = document.getElementById("todo__list");

document.getElementById("form__button").addEventListener("click", (event) => {
    event.preventDefault();
})

const newTodo = (dataObject) => {

    if (dataObject === {}) return;

    let title = dataObject.title;
    let state = dataObject.state;


    if (typeof title !== "string") return;
    if (!title) return
    if (typeof state !== "boolean") return;

    let todo = document.createElement("li");

    let todoTitle = document.createElement("h3");
    let todoTitleNode = document.createTextNode(title);
    todoTitle.appendChild(todoTitleNode);
    
    let todoState = document.createElement("input")
    todoState.type = "checkbox";
    todoState.name = "title";
    todoState.checked = state;

    todo.appendChild(todoTitle);
    todo.appendChild(todoState);
    TODO_LIST.appendChild(todo);
}
