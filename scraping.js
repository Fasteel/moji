import { JSDOM } from "jsdom";

const dom = await JSDOM.fromURL("https://gitmoji.dev/");
const document = dom.window.document;
const json = [];

document.getElementById("gitmoji-list").childNodes.forEach((res) => {
  if (res.nodeName === "ARTICLE") {
    const icon = res.querySelector("button").innerHTML;
    const description = res.querySelector("p").innerHTML;
    const code = res.querySelector("code").innerHTML;
    json.push({ icon, description, code });
  }
});

console.log(json); // data.js
