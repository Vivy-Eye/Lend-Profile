// ## Projects
"use strict";

database.portfolio.map(({ title, tags, desc, url_demo, url_github, url_img }) =>
  projects.insertAdjacentHTML(
    "beforeend",
    `
    <div class="project ${tags || ""}">
      <div class="project__cube-wrapper">
        <div class="project__cube">

          <div class="project__cube-top">
            <p class="project__desc">${desc || "Test descriptions"}</p>
            <div class="project__links">
              ${
                url_demo
                  ? `<a class="project__link project__link-demo" href="${url_demo}">demo</a>`
                  : ""
              }
              ${
                url_github
                  ? `<a a class= "project__link project__link-github" href = "${url_github}">github</a>`
                  : ""
              }
            </div>
          </div>

          <div class="project__cube-front">
            <h2 class="project__title">${title || "Test Title"}</h2>
            <img class="project__front-img" src="${
              url_img || "./src/components/Portfolio/projects/static.webp"
            }" alt="Picture - ${url_img}">
          </div>

        </div>
      </div>
    </div>
    `
  )
);
