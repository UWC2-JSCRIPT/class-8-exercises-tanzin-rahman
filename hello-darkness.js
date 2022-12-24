// function animate() {
//     if(count >= 0){
//         color = `rgb(${count}, ${count}, ${count})`;
//         count -= 1;
//     }
//     // Render background color

//     body.style.backgroundColor = color;
//     console.log(color);
//     // Fake delay using "setTimeout"
//     setTimeout(requestAnimationFrame, 500);
//     requestAnimationFrame(animate);
//   }

let count = 255;
let body = document.querySelector('body')
let start;
function animate(timestamp) {
    if (start == undefined) {
        start = timestamp;
    }
    if (timestamp - start >= 500) {
        // do animation or drawing stuff
        color = `rgb(${count}, ${count}, ${count})`;
        body.style.backgroundColor = color;
        start += 500
        count -= 1;
    }
    if (count > 0) {
        window.requestAnimationFrame(animate)
    }
}

window.requestAnimationFrame(animate)
