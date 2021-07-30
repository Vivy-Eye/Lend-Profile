/*--------------
    PORTFOLIO
--------------*/
"use strict";

const portfolio = document.getElementById("portfolio");

// ## Filtres
// Времеенное решение !! удалить добавить вставку по имеющимся тегам в portfolioWorksDB
// Add heandlers to filtres
(() => {
  const filtres = portfolio.querySelector(".filters");
  const filtres_btn_list = filtres.querySelectorAll("ul li>.filter__button");
  filtres_btn_list.forEach((btn) =>
    btn.addEventListener("click", showTagProjects, false)
  );
})();

// ### Filters heandler
function showTagProjects() {
  projects
    .querySelectorAll(`.project`)
    .forEach((project) => (project.style.display = "none"));
  projects
    .querySelectorAll(this.getAttribute("filter-attribute"))
    .forEach((project) => (project.style.display = ""));
}

// ## Projects
const projects = portfolio.querySelector(".projects");
