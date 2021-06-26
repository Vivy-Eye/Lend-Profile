// ### Portfolio
"use strict";

const Portfolio = document.getElementById("portfolio");

const portfolioWorksDB = [
  {
    url_github: "https://github.com/pin-cup/static.CryptoCoin-Calculator",
    url_demo: "https://pin-cup.github.io/static.CryptoCoin-Calculator/",
    url_img: "https://repository-images.githubusercontent.com/349825660/4a1f1600-9bb1-11eb-9858-5ab48b14a38f",
    tags: "static javascript spa api",
    desc: `static.CryptoCoin-Calculator\nТестовое задание.\nSPA - конвертер криптовалют.\nAPI - https://www.coingecko.com/ru/api.\nНаписан без фреймворков и библиотек.`,
  },
  {
    url_github: "https://github.com/pin-cup/static.CRUD-Passoword-Manager",
    url_demo: "https://pin-cup.github.io/static.CRUD-Passoword-Manager/",
    url_img: "https://user-images.githubusercontent.com/70973663/123513295-196d5980-d695-11eb-9093-c810a55a0cad.png",
    tags: "static javascript spa",
    desc: "static.CRUD-Passoword-Manager\nМини приложения для создания и расширения таблиц, в том числе поролей. Таблицы сохраняються как файл .json после нажатия на конпку Create File и ссылки на скачивание файла.",
  },
  {
    url_github: "https://github.com/pin-cup/Telegram-Bot-Parser",
    url_demo: "",
    url_img: "",
    tags: "python bot",
    desc: "Telegram-Bot-Parser\nPython bot для работы с api",
  },
  /*
  {
    url_github: "",
    url_demo: "",
    url_img: "",
    tags: "",
    desc: "",
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
