const TodoInput = document.getElementById("Inputfield");
const addbtn = document.getElementById("Add");
const clearAllbtn = document.getElementById("Clear");

const TodoItemsContainer = document.getElementById("Todo-Items-Container");

addbtn.addEventListener('click', () => {
    const value = TodoInput.value;

    const li = document.createElement('li');
    const p = document.createElement("p");
    p.innerText = value
    li.appendChild(p);

    const delbtn = document.createElement("button");
    delbtn.id = "del-btn";
    delbtn.innerText = "Delete";
    li.appendChild(delbtn);

    delbtn.addEventListener('click', () => {
        li.remove();
    })

    const Donebtn = document.createElement("button");
    Donebtn.innerText = "Done";
    li.appendChild(Donebtn);

    Donebtn.addEventListener("click", () => {
        p.style.textDecoration = "line-through";
        li.style.backgroundColor = "#FFE2A8";
    })

    TodoItemsContainer.appendChild(li);
    TodoInput.value = '';
})

clearAllbtn.addEventListener('click', () => {
    TodoItemsContainer.innerText = '';
})