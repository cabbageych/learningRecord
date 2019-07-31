function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
let mark = true;
let left = 0, leftMin = 0, leftMax = 0;
let ans = [];


function IsBalanced_Solution(pRoot) {
    if (!pRoot) {
        return true;
    }
    ans = [];
    mark = true;
    right = 0;
    left = 0;
    let head = pRoot;
    let arr = [];
    ans.push(pRoot)
    while (ans.length) {
        let temp = ans.shift();
        if (temp)
            arr.push(temp.val);
        else
            arr.push(temp)
        if (temp) {
            ans.push(temp.left);
            ans.push(temp.right);
        }
    }
    console.log(arr);
    return mark;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

console.log(IsBalanced_Solution(a));
console.log(ans);