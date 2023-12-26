// Menggunakan Warna yang kita pilih
const button = document.getElementById("button");

button.addEventListener("click", function(){
    //document.body.style.backgroundColor = "red";
    document.body.classList.toggle("biru-muda");
});

// Menggunakan warna Random
const tBaru = document.createElement("button");
const text = document.createTextNode("warna acak");

tBaru.appendChild(text);
tBaru.setAttribute("type", "button");

button.after(tBaru);

tBaru.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);


    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

