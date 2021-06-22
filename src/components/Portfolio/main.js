// ### Portfolio
"use strict";

const Portfolio = document.getElementById("portfolio");

const portfolioWorksDB = [
  {
    url_github: "https://github.com/pin-cup/static.CryptoCoin-Calculator",
    url_demo: "https://pin-cup.github.io/static.CryptoCoin-Calculator/",
    url_img:
      "https://camo.githubusercontent.com/9285925cb3a3645a311827bc382d8a952c2e0f15ad6c845a18428c98003e9efe/68747470733a2f2f73756e392d34312e757365726170692e636f6d2f696d70672f5476354d654a4f705f4e357634376b58556256634f48457544587437637a41765036514b34412f5a575f365346356f6643772e6a70673f73697a653d3133363678373638267175616c6974793d3936267369676e3d653032343235643737646436393364643964613731656538613030616434333526747970653d616c62756d",
    tags: "static javascript spa api",
    desc: `static.CryptoCoin-Calculator\nТестовое задание.\nSPA - конвертер криптовалют.\nAPI - https://www.coingecko.com/ru/api.\nНаписан без фреймворков и библиотек.`,
  },
  {
    url_github: "https://github.com/pin-cup/static.CRUD-Passoword-Manager/settings/pages",
    url_demo: "https://pin-cup.github.io/static.CRUD-Passoword-Manager/",
    url_img: "",
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
  filtres_btn_list.forEach((btn) =>
    btn.addEventListener("click", showTagProjects, false));
})()

function showTagProjects() {
  Projects.querySelectorAll(`.project`).forEach(project =>
    project.style.display = "none");
  Projects.querySelectorAll(this.getAttribute("filter-attribute")).forEach((project) =>
    (project.style.display = ""));
}