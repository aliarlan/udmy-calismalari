// UI vars

const form = document.querySelector ('form');
const input = document.querySelector ('#txtTaskname');
const btnDeleteAll = document.querySelector ('#btnDeleteAll');
const taskList = document.querySelector ('#task-list');

eventListeners();

function eventListeners(){
     form.addEventListener('submit', addNewItem);

}

function addNewItem(e){

console.log('submit');

  e.preventDefault();
}