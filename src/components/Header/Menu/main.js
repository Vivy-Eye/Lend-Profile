// ### MENU
"use strict";

const Menu = document.getElementById("menu");
const Menu_ul = Menu.querySelector(".menu__ul");

["portfolio", "skills", "experience", "education", "about", "contact"].forEach((menu_itemText) =>
  Menu_ul.insertAdjacentHTML(
    "beforeend",
    `
    <li class="menu__item">
      <a
        class="menu__item-link"
        href="#${menu_itemText}"
      >${menu_itemText}</a>
    </li>`
  )
);
