const toDoList = document.querySelector(".todoArea ul");
const toDoForm = document.querySelector("form.toDo_form");
const toDoInput = toDoForm.querySelector("input");

const KEY = "list";

let list = [];

function addList(evt) {
  evt.preventDefault();

  const date = new Date();
  const format = {
    id: date,
    content: toDoInput.value,
  };

  toDoInput.value = "";
  list.push(format);

  showData(format);
  saveList();
}

function saveList() {
  localStorage.setItem(KEY, JSON.stringify(list));
}

function deleteList(evt) {
  const li = evt.target.parentElement;
  list = list.filter((items) => items.id !== li.id);
  li.remove();
  saveList();
}

function showData(item) {
  const li = document.createElement("li");
  li.id = item.id;
  const span = document.createElement("span");
  span.innerText = item.content;
  const i = document.createElement("i");
  i.className = "fa-solid fa-trash";
  i.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(i);
  toDoList.appendChild(li);
}

const beforeData = localStorage.getItem(KEY);

if (beforeData !== null) {
  list = JSON.parse(beforeData);
  list.forEach((element) => {
    showData(element);
  });
}

toDoForm.addEventListener("submit", addList);
