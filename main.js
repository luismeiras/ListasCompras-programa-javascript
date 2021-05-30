let input = document.getElementById("input");
let addbutton = document.getElementById("addButton");
let list = document.getElementById("list");
let rmButtons = document.getElementsByClassName("remove");

function addProduct() {
  if(input.value !== "") {
    let li = document.createElement("li");

    let rmButton = document.createElement("button");
    rmButton.innerHTML = "x";
    rmButton.className = "remove";
    li.appendChild(rmButton);

    let text = document.createTextNode(input.value);
    li.appendChild(text);

    list.appendChild(li);

    input.value = "";
  }else{
    return false;
  }
  enableRmButtons();
}

function rmProduct() {
  this.parentElement.remove();
}

function enableRmButtons() {
  for(let i = 0; i < rmButtons.length; i++) {
    rmButtons[i].addEventListener("click", rmProduct);
  }
}

input.addEventListener('keypress', function(e){
  if(e.which == 13){
    addProduct();
  }
}, false);

function buttonFocus() {
     input.focus();
}

addbutton.addEventListener("click", addProduct);
addbutton.addEventListener("click", buttonFocus);
enableRmButtons();

