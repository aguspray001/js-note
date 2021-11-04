// DOM SELECTION:

//DOCUMENT SELECTION : .getElementById -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.innerHTML = 'Agus Prayudi'


//DOCUMENT SELECTION : .getElementByTagName -> HTMLCollection
const p = document.getElementsByTagName('p');
console.log(p)

for(let i = 0; i<p.length;i++){
    p[i].style.backgroundColor = 'pink'
}

// //DOCUMENT SELECTION : .getElementByClassName -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini dibuat dengan js'

// .querySelector
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange'