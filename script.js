let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');
let first = 0;
let last = names.length-1;

let number = function(first, last){
  return Math.floor(Math.random() * (last - first + 1) + first);
};

let chooseName = function(number, names){
  return names[number(first, last)];
};

para.textContent = chooseName(number, names);

const section = document.querySelector('section');

section.appendChild(para);
