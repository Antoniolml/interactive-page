import hamburgerMenu from "./dom/menu_hamburger.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/teclado.js";



const d = document; 

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
});

// shortCuts
d.addEventListener("keydown", e => {
  shortCuts(e);
  moveBall(e,".ball", ".stage");
});