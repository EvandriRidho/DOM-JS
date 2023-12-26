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

// Slider Warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener("input",function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener("input", function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
