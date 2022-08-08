// I'm paranoid writing this without types, please give TypeScript back to me, why am i doing this in JS

const TODO_LIST = document.getElementById("todo__list");
const TODO_INPUT = document.getElementById("form__input");

const todoSet = new Set();

document.getElementById("form__button").addEventListener("click", (event) => {
    event.preventDefault();
    handleSubmit();
})

const newTodo = (dataObject) => {
    // Initial checks

    if (dataObject === {}) return console.log("dataObject is empty");

    let title = dataObject.title;
    let state = dataObject.state;

    if (typeof title !== "string") return console.log("Title is not a string");
    if (!title) return console.log("No title");
    if (typeof state !== "boolean") return console.log("State is not a boolean");

    if (todoSet.has(dataObject.title)) return console.log("Duplicate item");

    // Checks cleared here, add todo

    todoSet.add(dataObject.title);

    // todoUpload(dataObject);

    renderTodo(dataObject);
}

const renderTodo = (dataObject) => {
    let title = dataObject.title;
    let state = dataObject.state;

    // Todo container
    let todo = document.createElement("li");
    todo.classList.add("flex")

    // Todo state
    let todoState = document.createElement("input")
    todoState.classList.add("mr-2")
    todoState.type = "checkbox";
    todoState.name = "title";
    todoState.checked = state;

    // Todo title
    let todoTitle = document.createElement("h3");
    todoTitle.classList.add("text-md","font-medium")
    let todoTitleNode = document.createTextNode(title);
    todoTitle.appendChild(todoTitleNode);

    // Appends
    todo.appendChild(todoState);
    todo.appendChild(todoTitle);
    TODO_LIST.appendChild(todo);
}

const handleSubmit = () => {
    todo = {
        title: TODO_INPUT.value,
        state: false,
    }
    newTodo(todo);
}

// const todoUpload = () => {
//     xmlHttp.open("POST", "http://localhost:5196/weatherforecast", false);
//     xmlHttp.send(null);
//     data = JSON.parse(xmlHttp.responseText);
     
//     for(object of data) {
//         newTodo({title: object.date, state: false})
//     }
// }

const initializeTodos = () => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:5196/todolist", false);
    xmlHttp.send(null);
    data = JSON.parse(xmlHttp.responseText);
     
    for(object of data) {
        newTodo({title: object.title, state: object.state})
    }
}

// Call on page load
initializeTodos();
