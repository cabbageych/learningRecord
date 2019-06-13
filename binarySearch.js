'use strict'
var a = [1,3,12,22,34,50];
function find(arr,l,r,target){
    var mid = (l+r)/2;
    mid = Math.floor(mid);
    if(arr[mid] == target){
        return mid;
    }
    if(l == r){
        console.log("no found!");
        return;
    }
    if(arr[mid] > target){
        return find(arr,l,mid-1,target);
    }else{
        return find(arr,mid+1,r,target);
    }
}
console.log(find(a,0,a.length-1,3));