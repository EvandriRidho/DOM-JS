/* <div id="container">
        <h1>Selamat Datang</h1>
        <p>Ini adalah contoh dokumen HTML dengan DOM.</p>
    </div>  */

// Dom tree
/*- Document (Element DOM)
    - html
        - head
            - title
                - "Contoh DOM" (Teks DOM)
        - body
            - div id="container" (id sebuah Atribut)
                - h1
                    - "Selamat Datang"
                - p
                    - "Ini adalah contoh dokumen HTML dengan DOM." */

// Mengakses elemen <p> dengan id "container"
var paragraph = document.getElementById("container").getElementsByTagName("p")[0];

// Mengubah teks dalam elemen <p>
paragraph.innerHTML = "Ini adalah teks yang diubah melalui JavaScript.";

// DOM TREE BERFUNGSI UNTUK MEMBUAT DOCUMENT HTML MENJADI SEBUAH TREE
