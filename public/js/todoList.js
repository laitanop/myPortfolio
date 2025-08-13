let body = document.body;

let field = document.getElementById("todo-input");
let addButton = document.getElementById("btn-add-todo");
let list = document.getElementById("list");
let error = document.getElementById("error");

field.placeholder = "Enter your today task...";

addButton.addEventListener("click", () => {
  let wrapperIcons = document.createElement("div");
  let div = document.createElement("div");
  let remove = document.createElement("span");
  let done = document.createElement("span");

  div.className = "list-text";
  wrapperIcons.className = "wrapper-icons";
  remove.className = "material-icons";
  remove.innerText = "delete";
  remove.style.color = "red";
  remove.style.cursor = "pointer";

  done.className = "material-icons";
  done.innerText = "radio_button_unchecked";
  done.style.color = "green";
  done.style.cursor = "pointer";

  if (field.value === undefined || field.value === "") {
    error.textContent = "Please add a task ";
  } else {
    div.textContent = field.value;

    wrapperIcons.appendChild(done);
    wrapperIcons.appendChild(remove);

    div.appendChild(wrapperIcons);

    list.prepend(div);

    field.value = "";
    error.textContent = "";

    remove.addEventListener("click", () => {
      div.remove();
    });

    done.addEventListener("click", () => {
      done.innerText = "check_circle";
      div.className = "list-text-done";
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
