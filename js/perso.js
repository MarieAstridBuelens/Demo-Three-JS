function callbackFunc() {
    console.log("render");
    window.requestAnimationFrame(callbackFunc)
}

window.requestAnimationFrame(callbackFunc)