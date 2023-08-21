// Manipulasi dom
const article = document.querySelector(".article")
const ps = document.querySelectorAll("p");

// innerText
ps[2].innerText = "kosong";

// innerHTML
ps[1].innerHTML = `<span style="font-size: 2rem; color: red;">halo</span>`;


// appendChild
const p4 = document.createElement("p");
p4.innerText = "Paragraf empat";
article.appendChild(p4);

// removeChild
article.removeChild(p4);

// replaceChild
const p3replacement = document.createElement("p");
p3replacement.innerText = "Pengganti paragraf tiga"
article.replaceChild(p3replacement, ps[2])

