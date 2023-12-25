// Event Handler
const judul = document.getElementById("judul");
function ubahWarna() {
    judul.style.backgroundColor = "lightblue";
}

judul.onclick = ubahWarna;

//addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function(){
    const ul = document.querySelector("section#b ul");

    const liBaru = document.createElement("li");
    const textBaru = document.createTextNode("item baru");

    liBaru.appendChild(textBaru);
    ul.appendChild(liBaru);

});

// Penggunaan addEventListener lebih baik digunakan
