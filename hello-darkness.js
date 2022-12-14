let count = 255;
const body = document.querySelector('body');

// Change background color every 0.5 second
// Clear interval if window color is black
let countdownInterval = setInterval(function () {
    if (count > 0) {
        count = count - 1;
        body.style.backgroundColor = `rgb(${count}, ${count}, ${count})`;
        console.log(` rgb now: rgb(${count}, ${count}, ${count})`)
    } else {
        clearInterval(countdownInterval);
    }
}, 500
);

