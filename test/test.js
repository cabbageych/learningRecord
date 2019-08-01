function fn(name){
    this.name = name;
    return name;
}

let a = new fn({'name':"name"});
console.log(a);