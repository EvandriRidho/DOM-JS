// document.getElementById() -> Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Evandri Ridho";

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = "Lightblue";
}
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari Js";

// document.querySelector() -> Element 
const p4 = document.querySelector("#b p");
p4.style.color = "Green";
p4.style.fontSize = "20px";

const ul2 = document.querySelector("ul li:nth-child(2");
ul2.style.backgroundColor = "Orange";

// document.querySelectorAll() -> Node List
const li = document.querySelectorAll("li");
for( let i = 0; i < li.length; i++) {
    li[i].style.color = "red";
}

