var button = document.getElementById('add');
var input = document.getElementById('input');
var ul = document.querySelector('ul');
var li = document.querySelector('li');
console.log(li);

function createDelete() {
  bt = document.createElement('button');
  bt.appendChild(document.createTextNode('Delete'));
  li.appendChild(bt);
}

function inputLength() {
  return input.value.length;
}

function createListElements() {
  li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

function afterClick() {
  if (inputLength() > 0) {
    createListElements();
  }
}

function afterKeypress(event) {
  if (inputLength() && event.code == 'Enter') {
    createListElements();
  }
}

button.addEventListener('click', afterClick);
input.addEventListener('keypress', afterKeypress);
createDelete();
