const status = document.getElementById("status");
const resetdiv = document.querySelector("#reset");
const boxes = document.querySelectorAll(".box");
const gameboad = document.getElementById("game-grid");
let isnext = true;
let gameon = true;
resetdiv.addEventListener("click", resetgame);

function resetgame() {
  for (const box of boxes) {
    box.classList.remove("x");
    box.classList.remove("o");
    document.getElementById("msg").innerHTML = null;
    document.getElementById("game-grid").style.pointerEvents = "all";
    resetdiv.innerHTML = "reset";
    resetdiv.style.color = "black";
  }
}

function checkwin(e) {
  const box1 = boxes[0].classList[2];
  const box2 = boxes[1].classList[2];
  const box3 = boxes[2].classList[2];
  const box4 = boxes[3].classList[2];
  const box5 = boxes[4].classList[2];
  const box6 = boxes[5].classList[2];
  const box7 = boxes[6].classList[2];
  const box8 = boxes[7].classList[2];
  const box9 = boxes[8].classList[2];
  if (
    (box1 && box1 === box2 && box3 === box1) ||
    (box4 && box4 === box5 && box6 === box4) ||
    (box7 && box7 === box8 && box9 === box7) ||
    (box1 && box1 === box4 && box7 === box1) ||
    (box2 && box2 === box5 && box2 === box8) ||
    (box3 && box3 === box6 && box3 === box9) ||
    (box1 && box1 === box5 && box1 === box9) ||
    (box3 && box3 === box5 && box7 === box3)
  ) {
    document.getElementById("msg").innerHTML = e;
    document.getElementById("game-grid").style.pointerEvents = "none";
    resetdiv.innerHTML = "play again!";
    resetdiv.style.color = "orange";
  }
}

for (const box of boxes) {
  box.addEventListener("click", handleclick);
}

function handleclick(e) {
  let classlist = e.target.classList;
  if (classlist[2] === "x" || classlist[2] === "o") {
    return;
  }
  if (isnext === true) {
    classlist.add("x");
    isnext = false;
    status.innerHTML = "o is next";
    checkwin("x won");
  } else {
    classlist.add("o");
    isnext = true;
    status.innerHTML = "x is next";
    checkwin("o won");
  }
}
