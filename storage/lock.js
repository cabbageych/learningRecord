let storage = localStorage;
storage.setItem('countWritting', 'off');
function setStorage() {
    let count = storage.getItem('count');
    let status = storage.getItem('countWritting');
    if (status == 'on') {
        console.log('count is writting!');
    } else {
        console.log('start writting count!');
        console.time('write count');
        storage.setItem('countWritting', 'on');
        if (!count) {
            count = 0;
        } else {
            count = parseInt(count);
            count++;
        }
        storage.setItem('count', count);
        storage.setItem('countWritting', 'off');
        console.timeEnd('write count');
    }
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