let bed = document.getElementById('bed')

const hoverTime = 1000;
let timeoutId;

bed.onmousemove = () => {
    clear()

    timeoutId = window.setTimeout(() => {
        console.log('go')
        // Hide the cursor in 3 seconds
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
