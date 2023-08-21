// Event Listener

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const password2Input = document.querySelector("#password2");

const onClick = () => console.log("clicked");
const onDblClick = () => console.log("double clicked");
const onMouseUp = () => console.log("mouse up");
const onMouseDown = () => console.log("mouse down");

const onMouseEnter = () => console.log("mouse enter");
const onMouseOver = () => console.log("mouse over");
const onMouseOut = () => console.log("mouse out");

const onRightClick = () => console.log("right click");
const onScroll = () => console.log("scrolling");

const onDragStart = () => console.log("drag started");
const onDrag = () => console.log("dragging");
const onDragEnd = () => console.log("drag ended")



const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const onNameBlur = (e) => {
  const name = e.target.value;
  if (!name || name === "") {
    console.log("Nama harus diisi!");
  }
}

const onPassword2Change = (e) => {
  const password = passwordInput.value;
  const password2 = e.target.value;

  if (password !== password2) {
    console.log("Password tidak sesuai");
  } else {
    console.log("Password cocok!")
  }
}

const onEmailBlur = (e) => {
  const email = e.target.value;
  if (!email || email === "") {
    console.log("Email harus diisi");
  } else if (!isValidEmail(email)) {
    console.log("Email tidak valid!")
  }
}


// click, doubleclick, mouseup, mousedown
box1.addEventListener("click", onClick)
box1.addEventListener("dblclick", onDblClick);
box1.addEventListener("mouseup", onMouseUp);
box1.addEventListener("mousedown", onMouseDown);

// mouseenter, mouseover, mouseout
box2.addEventListener("mouseenter", onMouseEnter)
box2.addEventListener("mouseover", onMouseOver)
box2.addEventListener("mouseout", onMouseOut)

// rightclick, scroll 
box3.addEventListener("contextmenu", onRightClick);
box3.addEventListener("wheel", onScroll);

// dragstart, drag, dragend
box4.addEventListener("dragstart", onDragStart);
box4.addEventListener("drag", onDrag);
box4.addEventListener("dragend", onDragEnd);

// input, blur
emailInput.addEventListener("blur", onEmailBlur)
password2Input.addEventListener("input", onPassword2Change)
