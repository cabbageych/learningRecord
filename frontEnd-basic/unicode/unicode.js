let a = "http://www.huajiyang.  com";
let b = "http%3A%2F%2Fwww.huajiyang.%20%20com";


//对a进行unicode编解码
//encodeURIComponent、decodeURIComponent
console.log(encodeURIComponent(a));

console.log(decodeURIComponent(b));

console.log(a,b);
//encodeURI、 decodeURI
console.log(encodeURI(a));
console.log(decodeURI(b));

/**
 * en(de)codeURI除了空格之外的其它字符都原封不动，只有空格被替换成了20%
 * 而en(de)codeURIComponent则会替换所有非字母数字字符（还有.）
 */