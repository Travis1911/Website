function moveBox() {
    let box = document.getElementById("box");
    let pos = 0;

    let interval = setInterval(() => {
        if (pos >= 300) {
            clearInterval(interval);
        } else {
            pos++;
            box.style.left = pos + "px";
        }
    }, 5);
} 
