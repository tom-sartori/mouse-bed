// Add a rectangle on the bottom right of the page.
const bed = document.createElement("div");
bed.id = "bed";
bed.appendChild(getStyle());    // Set style.

document.querySelector("body").appendChild(bed);

// Set event listeners.
let timeoutId;
bed.onmousemove = () => {
    clear()

    timeoutId = window.setTimeout(() => {
        document.body.style.cursor = 'none';
    }, 1000);
};

bed.onmouseleave = () => {
    clear()
}

function clear() {
    window.clearTimeout(timeoutId)
    document.body.style.cursor = 'default';
}

function getStyle() {
    const css = `
        #bed {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 25px;
            height: 25px;
            margin: 5px;
            border-radius: 2px;
            background-color: #0C356A;
            transition: 2000ms;
        }
        
        #bed:hover {
            background-color: transparent;
            border-radius: 4px;
            scale: 2;
            rotate: 540deg;
        }
    `;

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    return style;
}

function toPx(n) {
    return n.toString() + "px";
}
