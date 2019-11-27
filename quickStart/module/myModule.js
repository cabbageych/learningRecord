let name = null;

let setName = (arg) => {
    name = arg;
}

let sayHello = () => {
    console.log('hello', name + '!');
}

module.exports = {
    setName,
    sayHello
}
