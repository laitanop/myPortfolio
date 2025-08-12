let body = document.body;

let field = document.getElementById("todo-input");
let addButton = document.getElementById("btn-add-todo");
let list = document.getElementById("list");
let error = document.getElementById("error");

field.placeholder = "Enter your today task...";

addButton.addEventListener("click", () => {
  let div = document.createElement("div");
  let remove = document.createElement("button");
  let done = document.createElement("button");

  remove.innerText = "delete";
  done.innerText = "not done ";

  if (field.value === undefined || field.value === "") {
    error.textContent = "please add a task ";
  } else {
    div.textContent = field.value;
    div.appendChild(done);
    div.appendChild(remove);
    list.appendChild(div);
    field.value = "";
    error.textContent = "";
    remove.addEventListener("click", () => {
      div.remove();
    });
    done.addEventListener("click", () => {
      done.innerText = "done";
    });
  }
});

let backgroundIcons = [
  "task",
  "check_circle",
  "list_alt",
  "event_note",
  "done",
  "assignment",
  "fact_check",
  "notes",
  "task",
  "check_circle",
  "list_alt",
  "event_note",
  "done",
  "assignment",
  "fact_check",
  "notes",
];

backgroundIcons.forEach((element) => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.className = "icon-container";
  span.className = "material-icons";
  span.innerText = element;
  let randomTop, randomLeft;

  do {
    randomTop = Math.random() * 90;
    randomLeft = Math.random() * 90;
  } while (
    randomTop > 30 &&
    randomTop < 70 &&
    randomLeft > 30 &&
    randomLeft < 70
  );

  div.style.top = `${randomTop}%`;
  div.style.left = `${randomLeft}%`;

  div.appendChild(span);
  body.appendChild(div);
});
