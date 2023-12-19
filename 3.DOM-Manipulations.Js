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





