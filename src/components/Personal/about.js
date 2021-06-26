// ### About
"use strict";

const About = document.getElementById("about");

[
  // `
  // I a am front end UI designer and developer with a strong eye for creative, modern and trendy designs. I am an internet bug who try to keep up with the latest trends and technologies. I love photography and have been doing photography professionally and as a hobby for past couple of years. Hence my graphic designing, image editing and manipulation skills have been growing with me during these years.
  // `,
  `
  - I am create SPA in vanilla JavaScript;
  - I am work with Git, Bash, code formatting systems;
  - I am work with API (Vkontakte, Telegram and others, less popular);
  `,
  `
  - More than four years of experience with "home projects";
  - Experience in design and animating interfaces;
  - I have experience in creating parsers and bots;
  - Have experience in creating a back-end;
  - Experience with React (SPA), Node.js (npm), Flask and Django (back-end), PHP (Little experience);
  `,
  `
  - I be able understand the architecture of the project;
  - I be able do work all my free time;
  - I be able study the necessary tools;
  `,
  `
  Well organized. Ready for work.
  `,
].forEach((text) => {
  const container = document.createElement("p");
  container.classList = "about__text";
  container.innerText = text;

  About.insertAdjacentElement("beforeend", container);
});
