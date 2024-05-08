import './styles.css';
import home from "./home.js";
import footer from "./footer.js";
import menu from "./menu.js";
import about from './about.js';

const divContent = document.querySelector("div#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function changeTabs(btn, page) {
    btn.addEventListener("click", () => {
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
        divContent.appendChild(page());
    });
}

changeTabs(homeBtn, home);
changeTabs(menuBtn, menu);
changeTabs(aboutBtn, about);
divContent.appendChild(home());
document.body.appendChild(footer());
console.log("a");