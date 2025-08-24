//Variables for the wishlist
const inputBox = document.getElementById("gaming-dropdown");
const wishList = document.getElementById("list-container");
let games = [];

//Function adds game to the wishlist based on the input from the dropdown menu
function addGame(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.options[inputBox.selectedIndex].text;
    games.push(li.innerHTML);
    wishList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveList();
}

//Removes game from the wishlist when x button (the span element) is clicked
wishList.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);

//Saves the list to the local memory
function saveList(){
    localStorage.setItem("data", wishList.innerHTML);
}

//Displays the wishlist that was saved into the local memory 
function showList(){
    wishList.innerHTML = localStorage.getItem("data");
}

showList();