/**
query解析
a=1&b=2&c=name&a=2
输出
{
  a:[1,2],
  b:2,
  c:name
}
 */

function query(str) {
    str = str.trim();
    str = str.split("&");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split("=");
    }
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i][0] in obj) {
            if (Array.isArray(obj[str[i][0]])) {
                obj[str[i][0]].push(str[i][1]);
            } else {
                let temp = obj[str[i][0]];
                obj[str[i][0]] = [];
                obj[str[i][0]].push(temp);
                obj[str[i][0]].push(str[i][1]);
            }
        } else {
            obj[str[i][0]] = str[i][1];
        }
    }
    return obj;
}

console.log(query("a=1&b=2&c=name&a=2&d=666&a=3"));