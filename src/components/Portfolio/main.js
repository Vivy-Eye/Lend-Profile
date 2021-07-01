// ### Portfolio
"use strict";

const Portfolio = document.getElementById("portfolio");

const portfolioWorksDB = [
  {
    desc: `static.CryptoCoin-Calculator\nТестовое задание.\nSPA - конвертер криптовалют.\nAPI - https://www.coingecko.com/ru/api.\nНаписан без фреймворков и библиотек.`,
    tags: "static javascript spa api",
    url_demo: "https://pin-cup.github.io/static.CryptoCoin-Calculator/",
    url_github: "https://github.com/pin-cup/static.CryptoCoin-Calculator",
    url_img: "https://repository-images.githubusercontent.com/349825660/4a1f1600-9bb1-11eb-9858-5ab48b14a38f",
  },
  {
    desc: "static.CRUD-Passoword-Manager\nМини приложения для создания и расширения таблиц, в том числе поролей. Таблицы сохраняються как файл .json после нажатия на конпку Create File и ссылки на скачивание файла.",
    tags: "static javascript spa",
    url_demo: "https://pin-cup.github.io/static.CRUD-Passoword-Manager/",
    url_github: "https://github.com/pin-cup/static.CRUD-Passoword-Manager",
    url_img: "https://user-images.githubusercontent.com/70973663/123513295-196d5980-d695-11eb-9093-c810a55a0cad.png",
  },
  {
    desc: "Telegram-Bot-Parser\nPython bot для работы с api",
    tags: "python bot",
    url_demo: "",
    url_github: "https://github.com/pin-cup/Telegram-Bot-Parser",
    url_img: "",
  },
  /*
  {
    desc: "",
    tags: "",
    url_demo: "",
    url_github: "",
    url_img: "",
  },
  */
];

// ## Filtres
const Filtres = portfolio.querySelector(".filters");

// Времеенное решение !! удалить добавить вставку по имеющимся тегам в portfolioWorksDB
(() => {
  const filtres_btn_list = Filtres.querySelectorAll("ul li>.filter__button");
  filtres_btn_list.forEach((btn) => btn.addEventListener("click", showTagProjects, false));
})();

function showTagProjects() {
  Projects.querySelectorAll(`.project`).forEach((project) => (project.style.display = "none"));
  Projects.querySelectorAll(this.getAttribute("filter-attribute")).forEach((project) => (project.style.display = ""));
}
