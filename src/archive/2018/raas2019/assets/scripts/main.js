const target = document.getElementById('titleAnimation');
let vert = 0;
const hrzn = 0;
const rota = 0;
let isScrolling = false;

function update() {
    target.style.fontFeatureSettings = `"hrzn" -1000, "vert" ${vert}, "rota" 45`;
}

function init() {
    let timer = null;

    if (timer) {
        clearTimeout(timer); // cancel the previous timer.
        timer = null;
    }

    window.addEventListener('scroll', () => {
        isScrolling = true;
        vert = window.scrollY;

        target.style.fontFeatureSettings = `"hrzn" -1000, "vert" ${vert}, "rota" 45`;

        timer = setTimeout(() => {
            isScrolling = false;
        }, 500);
    });
}

document.addEventListener('DOMContentLoaded', init, false);
