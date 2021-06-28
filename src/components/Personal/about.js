// ### About
"use strict";

const About = document.getElementById("about");

[
  `
      I can:
    - create SPA in vanilla JavaScript;
    - work with Git, Bash, code formatting systems;
    - work with API (Vkontakte, Telegram and others, less popular);
  `,
  `
      I have:
    - More than four-year experience of "home projects";
    - experience in design and animating interfaces;
    - experience in creating parsers and bots;
    - experience in creating a back-end;
    - Experience with React (SPA), Node.js (npm), Flask and Django (back-end), PHP (not much experience);
  `,
  `
      I am able:
    - to understand the architecture of the project;
    - to do work all my free time;
    - to study the necessary tools by myself.
  `,
  `
    I am well organized. Ready to work.
  `,
].forEach((text) => {
  const container = document.createElement("p");
  container.classList = "about__text";
  container.innerText = text;

  About.insertAdjacentElement("beforeend", container);
});
