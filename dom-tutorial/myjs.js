// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);



// // red p
// const redP = document.createElement('p');
// redP.textContent = "Hey, I'm red";
// redP.classList.add('red-p');
// content.appendChild(redP);

// // const
// const blueh3 = document.createElement('h3');
// blueh3.textContent = "Hi, Im blue h3";
// blueh3.classList.add('blue');
// content.appendChild(blueh3);

// const fancydiv = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.textContent = "I'm in a div"
// const p = document.createElement('p');
// p.textContent = "p-me too"

// fancydiv.classList.add('fancy');

// fancydiv.appendChild(h1);
// fancydiv.appendChild(p);

// content.appendChild(fancydiv);


// // Events

// // method 2
// const btn2 = document.querySelector('#btn2');
// btn2.onclick = () => alert("Hello World 2");


// // method 3 
// const btn3 = document.querySelector('#btn3');

// // btn3.addEventListener('click', () => {
// // 	alert("Hello World 3");
// // });

// btn3.addEventListener('click', function (e) {
// 	console.log(e);
//     console.log(e.target);
//     e.target.style.background = 'blue';
// });


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
