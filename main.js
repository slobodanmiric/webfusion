//document.querySelectorAll(".navButton");

Array.from(document.querySelectorAll(".navButton")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('cardChange');
    }
});