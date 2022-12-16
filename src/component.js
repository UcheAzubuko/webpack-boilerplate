import logo from "./logo.svg";

function component() {
  let main = document.createElement("main");
  let para = document.createElement("p");
  let img = document.createElement("img");
  main.append(para);
  para.append(img);
  img.src = logo;
  img.alt = "logo for the app";
  return main;
}

export default component;
