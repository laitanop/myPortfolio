let projects = [
  {
    name: "Todo List",
    description: "A responsive javascript todo list",
    image: "../img/todoList.png",
    link: "/todo-list",
    github: "https://www.google.com",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Blog Template",
    description: "A responsive javascript blog template",
    image: "",
    link: "/blog-template",
    github: "https://www.google.com",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
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
