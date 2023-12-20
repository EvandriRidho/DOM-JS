// Manipulation Element
const judul = document.getElementById("judul");

judul.innerHTML = "Evandri Ridho" // untuk menganti element pada html contoh disini text

judul.style.textAlign ="center"; // untuk menambah sebuah property pada html menggunakan Js

judul.setAttribute("class","Judul-Text"); // untuk menambah Attribute

judul.removeAttribute("class"); // untuk menghapus Attribute

const p2 = document.querySelector(".p2");
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.remove("satu");
p2.classList.toggle("test");
p2.classList.contains("test");
p2.classList.replace("dua","coba");
p2.classList.item(0);

// Manipulasi Node
// Membuat element baru
const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("Paragraf Baru");

// Simpan teksBaru ke pBaru
pBaru.appendChild(teksBaru);

// Simpan pBaru ke Section A
const SectionA = document.getElementById("a");
SectionA.appendChild(pBaru);


// Coba Manipulation Node
const liBaru = document.createElement("li");
const teks = document.createTextNode("item baru");

liBaru.appendChild(teks);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// RemoveChild
const a = SectionA.querySelector("a");
SectionA.removeChild(a); // Menghapus a dari sectionA

// ReplaceChild
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2 = document.createElement("h2");
const teksH2 = document.createTextNode("Judul Baru!");

h2.appendChild(teksH2);

sectionB.replaceChild(h2,p4);
