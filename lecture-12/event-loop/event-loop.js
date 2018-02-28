const button = document.getElementById('button-element');
button.addEventListener('click', function () {
    console.log('clicked')
});

function hey() {
    console.log('started');
    let i = 10000000000;
    while (i > 1) {
        i--;
    }
    console.log('finished');
}



