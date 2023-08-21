// style & class 
const daftarBelanja = document.querySelectorAll("li");


function toggleStyle(e) {
  e.target.classList.toggle("highlighted");
}

const item0 = daftarBelanja[0];
const item1 = daftarBelanja[1];
const item2 = daftarBelanja[2];

item2.className = "highlighted added";
item0.classList.remove("highlighted")
item1.classList.add("highlighted")

/**
daftarBelanja[0].addEventListener("click", function(e) {
  e.target.classList.toggle("highlighted");
});
**/

daftarBelanja.forEach(function(item) {
  item.addEventListener("click", toggleStyle);
});

