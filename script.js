// var button = document.getElementById('add');
// var input = document.getElementById('input');
// var ul = document.querySelector('ul');
// var deleteTodoEl = document.getElementById(input.value);
// // var li = document.querySelector('li');

// function createDelete() {
//   bt = document.createElement('button');
//   bt.setAttribute('id', input.value);
//   bt.appendChild(document.createTextNode('Delete'));
//   li.appendChild(bt);
//   bt.style.borderRadius = '5px';
//   bt.style.border = '1px solid black';
//   bt.style.marginLeft = '5px';
// }

// function deleteTodo() {
//   const item = document.getElementById(input.value);
//   ul.removeChild(item);
// }

// function createListElements() {
//   li = document.createElement('li');
//   li.setAttribute('id', input.value);
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   createDelete();
//   input.value = '';
// }

// function afterClick() {
//   if (inputLength() > 0) {
//     createListElements();
//   }
// }

// button.addEventListener('click', afterClick);

// deleteTodoEl.addEventListener('click', deleteTodo);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
var input = document.getElementById('myInput');
function newElement() {
  var li = document.createElement('li');
  var t = document.createTextNode(input.value);
  li.appendChild(t);
  if (input === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  input.value = '';
  function afterKeypress(event) {
    if (input.value.length && event.code == 'Enter') {
      newElement();
    }
  }
  input.addEventListener('keypress', afterKeypress);

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName('close');
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
