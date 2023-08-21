// DOM traversal 

const images = [
  "https://images.unsplash.com/photo-1683526017468-c7c9d5e3448e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",

  "https://images.unsplash.com/photo-1685012851682-a2d021571fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=767&q=80",
  "https://images.unsplash.com/photo-1684690640456-381bc7183e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
  "https://images.unsplash.com/photo-1684431816433-1c03a9d41be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
];


const list = document.querySelector("#list");
const listItems = document.querySelectorAll("li");
const links = document.querySelectorAll("a");
const imgPreview = document.querySelector("#img-preview");

links.forEach(link => {
  link.addEventListener("click", handleClick);
})

function handleClick(e) {
  const link = e.target;
  const { id } = link.dataset;
  const url = images[id]
  showPicture(url);
  removeHighlight(link);
  addHighlight(link);
}

function showPicture(url) {
  // Terlebih dahulu kosongkan imgPreview container
  while (imgPreview.firstChild) {
    imgPreview.removeChild(imgPreview.firstChild);
  }
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("img");
  imgPreview.appendChild(img);

}

function removeHighlight(item) {
  /**
   * Dengan struktur seperti ini 
   * <ul>
   *  <li><a href=""><a></li>
   *  <li><a href=""><a></li>
   * </ul>
   *
   * Kita bisa melihat bahwa, parentNode dari link (a) adalah `li`,  
   * sehingga untuk memiliki akses ke seluruh link yang ada di setiap li, kita terlebih 
   * dahulu akan memiliki aksed ke parent dari li, yaitu `ul`
   */
  const grandParent = item.parentNode.parentNode;
  //                   a  >   li     > ul 
  const uncles = grandParent.querySelectorAll("li");
  // [li, li, li]
  uncles.forEach(uncle => {
    //            li
    const cousin = uncle.querySelector("a");
    // a
    cousin.classList.remove("highlighted");
    // a.classList.remove("highlighted")
  });
}

function addHighlight(item) {
  item.classList.add("highlighted");
}

