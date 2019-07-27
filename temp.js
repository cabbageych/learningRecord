let ans = Infinity;
function fn(arr,len,str){
    if(len<=0){
        //console.log(str);
        if(parseInt(str)<ans){
            ans = parseInt(str);
        }
        return;
    }
    for(let i = 0;i<len;i++){
        let temp = arr[i];
        str +=arr[i];
        arr.splice(i,1);
        fn(arr,len-1,str);
        str = str.substr(0,str.length-temp.length);
        arr.splice(i,0,temp);
    }
    
}


function PrintMinNumber(numbers)
{
    if(numbers.length == 0){
        return 0;
    }
    for(let i= 0;i<numbers.length;i++){
        numbers[i] = numbers[i].toString();
    }
    let str = '';
    fn(numbers,numbers.length,str);
}

let arr = [3,5,1,4,2];
PrintMinNumber(arr);
console.log(ans);

let test = 'cabbage';
test01 ='354234';
test += test01;
console.log(test.substr(0,test.length-test01.length));
module.exports = {
    PrintMinNumber : PrintMinNumber
};