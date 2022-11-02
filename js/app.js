let countEl =  document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function  increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr;
    countEl.textContent = 0; // reset increment fucntion
    count = 0;
}