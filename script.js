const bir = document.querySelector(".Kungilik");
const ikki = document.querySelector(".Uzunlik");
const uch = document.querySelector(".Mamlakat");
const tort = document.querySelector(".Shahar");
const besh = document.querySelector(".Ip");
const olti = document.querySelector(".Internet");
const button = document.querySelector("#slojno");

button.addEventListener("click", () => {
    fetch("https://ipinfo.io/json")
        .then(response => response.json())
        .then(data => {
            bir.innerHTML = `Kungilik: ${data.loc.split(",")[0]}`;
            ikki.innerHTML = `Uzunlik: ${data.loc.split(",")[1]}`;
            uch.innerHTML = `Mamlakat: ${data.country}`;
            tort.innerHTML = `Shahar: ${data.city}`;
            besh.innerHTML = `IP Manzil: ${data.ip}`;
            olti.innerHTML = `Internet provayder: ${data.org}`;
        })
});