let projects = [
  {
    name: "Todo List in Javascript",
    description: "A javascript todo list",
    image: "../img/todoList.png",
    link: "todoList.html",
    github: "https://www.google.com",
    tech: ["Javascript", "HTML", "CSS"],
    date: "2021-01-01",
  },
];

let cardContainer = document.getElementById("card-container");
let body = document.body;

projects.forEach((project) => {
  let card = document.createElement("div");

  card.className = "card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" />
    <h2>${project.name}</h2>
    <p>${project.description}</p>
    <p>${project.tech.join(", ")}</p>
    <a href="${project.link}">View Project</a>

  `;

  card.addEventListener("click", () => {
    window.location.href = project.link;
  });
  cardContainer.appendChild(card);
});

body.appendChild(cardContainer);
