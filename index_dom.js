import hamburgerMenu from "./dom/menu_hamburger.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
countDown


const d = document; 

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "countDown",
    "Jun 11, 2022 17:39:00", 
    "feliz cumple");
});

// shortCuts
d.addEventListener("keydown", e => {
  shortCuts(e);
  moveBall(e,".ball", ".stage");
});