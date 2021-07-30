/*--------------
    MAIN
--------------*/
"use strict";

const menu = document.getElementById("menu");

["portfolio", "skills", "experience", "education", "about", "contact"].map(
  (menu_itemText) =>
    menu.querySelector(".menu__ul").insertAdjacentHTML(
      "beforeend",
      `
      <li class="menu__item">
        <a
          class="menu__item-link"
          href="#${menu_itemText}"
        >${menu_itemText}</a>
      </li>
      `
    )
);
