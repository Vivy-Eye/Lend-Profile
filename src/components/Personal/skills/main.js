"use strict";

const Skills = document.querySelector(".skills");

[
  {
    name: "HTML",
    value: 0.884,
  },
  {
    name: "CSS",
    value: 0.819,
  },
  {
    name: "JavaScript",
    value: 0.901,
  },
  {
    name: "Node.js",
    value: 0.291,
  },
  {
    name: "React",
    value: 0.418,
  },
  {
    name: "Tests",
    value: 0.381,
  },
  {
    name: "SEO",
    value: 0.669,
  },
  {
    name: "PHP",
    value: 0.327,
  },
  {
    name: "Python",
    value: 0.725,
  },
  {
    name: "Django",
    value: 0.621,
  },
  {
    name: "Flask",
    value: 0.654,
  },
  {
    name: "SQL",
    value: 0.263,
  },
  {
    name: "Git",
    value: 0.847,
  },
  {
    name: "Bash",
    value: 0.483,
  },
  {
    name: "API",
    value: 0.945,
  },
  {
    name: "English",
    value: 0.4799999999999999999,
  },
  {
    name: "Design",
    value: 0.661,
  },
].forEach((skill) =>
  Skills.insertAdjacentHTML(
    "beforeend",
    `
    <div class="skill ${skill.name}">
      <p class="skill__name">${skill.name}</p>
      <meter class="skill__meter" min="0" low=".30" high=".60" optimum=".80" max="1" value="${skill.value}"></meter>
      <div class="skill__value"><i>${(skill.value * 100).toFixed(1)}</i></div>
    </div>
    `
  )
);
