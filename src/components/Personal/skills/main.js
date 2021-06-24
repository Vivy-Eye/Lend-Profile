"use strict";

const Skills = document.querySelector(".skills");

[
  {
    name: "Programming",
    value: 0.81,
  },
  {
    name: "Coding",
    value: 0.325,
  },
  {
    name: "Digital",
    value: 0.52,
  },
].forEach((skill) =>
  Skills.insertAdjacentHTML(
    "beforeend",
    `
    <div class="skill ${skill.name}">
      <p class="skill__name">${skill.name}</p>
      <meter class="skill__meter" min="0" low=".33" high=".66" optimum=".80" max="1" value="${skill.value}"></meter>
      <i class="skill__value">${skill.value * 100}</i>
    </div>
    `
  )
);
