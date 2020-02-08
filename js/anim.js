const container = document.querySelectorAll(".container");

function flipMe() {
    container[0].classList.toggle('flip');
    console.log('flipped');
}

console.log('done');