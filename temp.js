function TreeLinkNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function fn(node,arr){
    if(!node){
        return ;
    }
    fn(node.left,arr);
    arr.push(node.val);
    fn(node.right,arr);
}

function KthNode(pRoot, k)
{
    let arr = [];
    fn(pRoot,arr);
    return arr[k-1];
}
let n8 = new TreeLinkNode(8);
let n6 = new TreeLinkNode(6);
let n10 = new TreeLinkNode(10);
let n5 = new TreeLinkNode(5);
let n7 = new TreeLinkNode(7);
let n9 = new TreeLinkNode(9);
let n11 = new TreeLinkNode(11);
n8.left = n6, n8.right = n10;
n6.next = n8, n6.left = n5, n6.right = n7;
n5.next = n6, n7.next = n6;
n10.next = n8, n10.left = n9, n10.right = n11;
n9.next = n10, n11.next = n10;

console.log(KthNode(n8,1));