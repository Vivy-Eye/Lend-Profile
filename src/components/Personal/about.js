
/*--------------
    ABOUT
--------------*/
"use strict";

database.about.map((text) => {
  const container = document.createElement("p");
  container.classList = "about__text";
  container.innerText = text;

  document
    .getElementById("about")
    .insertAdjacentElement("beforeend", container);
});
