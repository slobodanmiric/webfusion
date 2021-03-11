var jsView = document.querySelector('#jsView');
var phpView = document.querySelector('#phpView');
var wpView = document.querySelector('#wpView');
var jsViewImg = document.querySelector('#jsViewImg');
var phpViewImg = document.querySelector('#phpViewImg');
var wpViewImg = document.querySelector('#wpViewImg');

function showJsView() {
    jsView.style.display = "block";
    phpView.style.display = "none";
    wpView.style.display = "none";
    jsViewImg.style.display = "block";
    phpViewImg.style.display = "none";
    wpViewImg.style.display = "none";
}

function showPhpView() {
    jsView.style.display = "none";
    phpView.style.display = "block";
    wpView.style.display = "none";
    jsViewImg.style.display = "none";
    phpViewImg.style.display = "block";
    wpViewImg.style.display = "none";
}

function showWpView() {
    jsView.style.display = "none";
    phpView.style.display = "none";
    wpView.style.display = "block";
    jsViewImg.style.display = "none";
    phpViewImg.style.display = "none";
    wpViewImg.style.display = "block";
}

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


