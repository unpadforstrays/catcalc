let buton = document.getElementById("tombol");


buton.addEventListener('click', () => {

let newnum1 = parseFloat(document.getElementById("1").value);
let newnum2 = parseFloat(document.getElementById("2").value);

hasil = newnum1 + newnum2;

document.getElementById("sini").textContent = `The ${hasil}`;

});
