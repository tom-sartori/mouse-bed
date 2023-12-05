const cursorSize = 20;
const padding = 5;
const margin = 5;
const hoverTime = 1000;
let timeoutId;

// Add a rectangle on the bottom right of the page.
const bed = document.createElement("div");
bed.id = "bed";
bed.appendChild(getStyle());    // Set style.

document.querySelector("body").appendChild(bed);

// Set event listeners.
bed.onmousemove = () => {
    clear()

    timeoutId = window.setTimeout(() => {
        document.body.style.cursor = 'none';
    }, hoverTime);
};

bed.onmouseleave = () => {
    clear()
}

function clear() {
    window.clearTimeout(timeoutId)
    document.body.style.cursor = 'default';
}

function getStyle() {
    Object.assign(bed.style, {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: toPx(cursorSize + padding),
        height: toPx(cursorSize + padding),
        margin: toPx(margin),
        borderRadius: toPx(2),
        backgroundColor: "#0C356A",
        transition: "1800ms"
    });

    const hover = `
        #bed:hover {
            background-color: transparent;
            border-radius: 4px;
            scale: 2;
            rotate: 540deg;
        }
    `;

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(hover));
    return style;
}

function toPx(n) {
    return n.toString() + "px";
}
