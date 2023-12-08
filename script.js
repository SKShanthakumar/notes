//to open popup window
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var addButton = document.querySelector(".add-button");
var closeButton = document.querySelector("#close-popup");

addButton.addEventListener("click",function(){
    popup.style.display = "block";
    overlay.style.display = "block";
});

//to close popup window
var closeButton = document.querySelector("#close-popup");

closeButton.addEventListener("click",function(event){
    event.preventDefault();
    popup.style.display = "none";
    overlay.style.display = "none";
    titleInput.value='';
    timeInput.value='';
    descInput.value='';
});

//to add content to page
var container = document.querySelector(".container");
var addNote = document.querySelector("#add-note");
var titleInput = document.querySelector("#title-input");
var timeInput = document.querySelector("#time-input");
var descInput = document.querySelector("#desc-input");

addNote.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","content-container");
    div.innerHTML = `<h2>${titleInput.value}</h2>
    <h5>${timeInput.value}</h5>
    <p>${descInput.value}</p>
    <button onclick="deleteNote(event)">Delete</button>`;
    container.append(div);
    popup.style.display = "none";
    overlay.style.display = "none";
    titleInput.value='';
    timeInput.value='';
    descInput.value='';
});

//to delete a note
function deleteNote(event){
    alert("Do you want to delete?");
    event.target.parentElement.remove();
}