function reqBackgroundAnimation() {
    if(count >= 0){
        color = `rgb(${count}, ${count}, ${count})`;
        count -= 1;
    }
    // Render background color
    
    body.style.backgroundColor = color;
    console.log(color);
    // Fake delay using "setTimeout"
    setTimeout(reqBackgroundAnimation, 500);
  }

  let count = 255;
  let body = document.querySelector('body')
  window.reqBackgroundAnimation(count);
