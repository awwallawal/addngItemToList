const container = document.getElementById('container');
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let myList = [];


inputBtn.addEventListener('click', function(){
    container.innerHTML = "";
    let inputValue = inputEl.value.toLowerCase();
    if (!(myList.includes(inputValue))){
        myList.push(inputValue)
    };
    renderMyList();
    inputEl.value = "";
});

function renderMyList (){
    for (let i = 0; i < myList.length; i++){
     if(myList[i] === ""){

     } else{
          container.innerHTML += `<li>${myList[i].toLowerCase()}</li>`
     }
        }
};