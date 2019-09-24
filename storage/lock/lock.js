let storage = localStorage;
let currentUrl = window.location.href;
let refresh = false;
let timer;

function setStorage() {
    timer = setInterval(() => {
        let count = storage.getItem('count');
        let status = storage.getItem(currentUrl);
        if (status == 'off') {
            console.log('count is writting!');
            clearInterval(timer);
        } else {
            console.log('start writting count!');
            console.time('write count');
            if (!count) {
                count = 0;
            } else {
                count = parseInt(count);
                count++;
            }
            storage.setItem('count', count);
            console.timeEnd('write count', count);
        }
    }, 2000);
}

function showStorage() {
    let show = document.getElementById('showVal');
    let count = storage.getItem('count');
    if (!count) {
        show.value = 'count hasn\'t been initialized!';
    } else {
        show.value = 'count: ' + count;
    }
    //console.log('emm');
}


function clearStorage() {
    storage.clear();
}

/*window.onunload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080");
    xhr.send('refresh');
}*/

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == 'hidden') {
        clearInterval(timer);
        storage.setItem(currentUrl, 'off');
    } else if (document.visibilityState == 'visible') {
        storage.setItem(currentUrl, 'on');
        console.log('page show');
    }
})