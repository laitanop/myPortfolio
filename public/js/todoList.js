let field = document.getElementById("todo-input");
let addButton = document.getElementById("btn-add-todo");
let list = document.getElementById("list");

addButton.addEventListener("click", () => {
  let div = document.createElement("div");
  div.textContent = field.value;
  list.appendChild(div);
  console.dir(field);
  field.value = "";
});
