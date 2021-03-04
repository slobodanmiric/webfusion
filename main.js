//   cards
Array.from(document.querySelectorAll(".navButton")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('cardChange');
    }
});

///  kuckanje
const naslov = "Web design and development";
let i = 0;
const kuckanje = () => {
    if(i < naslov.length) {
        document.querySelector('.tipkajuciNaslov').innerHTML += naslov.charAt(i);
        i++;
        setTimeout(kuckanje, 100);
    }
}
kuckanje();

//// slider
var img = document.querySelector('.slajdovi');

var brojac = 1;
var loop = setInterval(function() {
    brojac++;
    if(brojac === 4) {
        brojac = 1;
    }
    img.setAttribute('src', 'img/img' + brojac + '.jpg');
}, 4000);









