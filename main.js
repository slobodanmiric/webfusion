//document.querySelectorAll(".navButton");

Array.from(querySelectorAll(".navButton")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('cardChange');
    }
});