let str = 'abc-dfe-i3-dfjl';

let reg = /(\-)(\w)/g;


str = str.split("-");
str = str.map((val, index) => {
    if (index == 0) {
        return val;
    } else {
        let temp = val[0];
        temp = temp.toUpperCase();
        let sub = val.substr(1);
        return temp + sub;
    }
})
console.log(str.join(""));