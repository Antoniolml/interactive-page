const d = document;

let x = 0,
  y = 0;


export function moveBall(e, ball, stage ){
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  //console.log(e.keyCode);
  //console.log(e.key);
  //console.log(limitsBall,limitsStage);

  switch (e.keyCode) {
    case 37: //left
    if(limitsBall.left > limitsStage.left){
      e.preventDefault();
      x--;
    } 
      break;
    case 38: // up
    if(limitsBall.top > limitsStage.top){
      e.preventDefault();
      y--;
    }
        break;
    case 39: // right
    if(limitsBall.right < limitsStage.right){
      e.preventDefault();
      x++;
    } 
      break;
    case 40: // down
    if(limitsBall.bottom < limitsStage.bottom){
      e.preventDefault();
      y++;
    } 
      break;
  
    default:
      break;
  }
  $ball.style.transform =`translate(${x * 10}px, ${y * 10}px)`;
}


export function shortCuts(e){
  /* console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.shiftKey);
  console.log(e); */

  if(e.key === "a" && e.altKey){
    alert("Haz lanzado una alerta con el teclado");
  }

  if(e.key === "c" && e.altKey){
    confirm("Haz lanzado una confirmacion con el teclado");
  }

  if(e.key === "p" && e.altKey){
    prompt("Haz lanzado una aviso con el teclado");
  }
}