function fn01(arg01, arg02) {
    console.log('fn01', arg01, arg02, fn01.length, fn02.length, fn03.length);
}

function fn02(arg01) {
    console.log('fn02', arg01, fn01.length, fn02.length, fn03.length);
}

function fn03() {
    console.log('fn03', fn01.length, fn02.length, fn03.length);
}

fn01('01', '02');
fn02('03');
fn03();