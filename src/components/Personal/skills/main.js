// ## Skills
"use strict";

database.skills.map((skill) =>
  document.querySelector(".skills").insertAdjacentHTML(
    "beforeend",
    `
    <div class="skill ${skill.name}">
      
      <p class="skill__name">${skill.name}</p>
      <meter
        class="skill__meter"
        high=".60"
        low=".30"
        max="1"
        min="0"
        optimum=".80"
        value="${skill.value}"
      ></meter>
      <div class="skill__value">
        <i>${(skill.value * 100).toFixed(1)}</i>
      </div>

    </div>
    `
  )
);
