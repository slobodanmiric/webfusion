//document.querySelectorAll(".navButton");

Array.from(document.querySelectorAll(".navButton")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('cardChange');
    }
});

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
