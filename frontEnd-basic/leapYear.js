let year = Math.ceil(Math.random() * 2018);

function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(year);
console.log(leapYear(year));