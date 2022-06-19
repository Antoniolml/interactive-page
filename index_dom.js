import hamburgerMenu from "./dom/menu_hamburger.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/botton_scroll.js";
import darkTheme from "./dom/theme_dark.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_camara.js";



const d = document; 

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "countDown",
    "Dec 11, 2022 17:39:00", 
    "feliz cumple 🤑"
    );
  scrollTopButton(".scroll_btn");
    
  responsiveMedia("youtube",
   "(min-width: 1024px)", 
   `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank" rel = "noopener">Ver video</a>`, 
   `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
   );

   responsiveMedia("gmaps",
   "(min-width: 1024px)", 
   `<a href="https://goo.gl/maps/pitFRZkUKiXZZUpW9" target="_blank" rel = "noopener">Ver video</a>`, 
   `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.881416470793!2d-77.0367842490311!3d-12.05167924523277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9d7b6a104f1%3A0xf90de36df50e9438!2sPlaza%20San%20Martin!5e0!3m2!1ses-419!2spe!4v1655308657866!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
   );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device")
  webCam("webcam");
    

});

// shortCuts
d.addEventListener("keydown", e => {
  shortCuts(e);
  moveBall(e,".ball", ".stage");
});

darkTheme(".dark_theme", "dark-mode");

networkStatus();