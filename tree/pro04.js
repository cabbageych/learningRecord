/*根据先序和中序遍历构建二叉树
先：let first = [11,6,5,8,7,23,21,45,71]
中：let middle = [5,6,7,8,11,21,23,45,71]
*/
function Node() {
    this.data = '';
    this.lChild = null;
    this.rChild = null;
}

let first = [11, 6, 5, 8, 7, 23, 21, 45, 71];
let middle = [5, 6, 7, 8, 11, 21, 23, 45, 71];

let head = new Node();

function createTree(fir, mid, node) {
    node.data = fir[0];
    let pos = mid.indexOf(fir[0]);
    let fir01 = fir.slice(1, pos + 1);
    let fir02 = fir.slice(pos + 1, fir.length);
    let mid01 = mid.slice(0, pos);
    let mid02 = mid.slice(pos + 1, mid.length);
    //console.log(fir01, fir02, mid01, mid02);
    if (fir01.length && mid01.length) {
        let temp = new Node();
        node.lChild = temp;
        createTree(fir01, mid01, temp);
    }
    if (fir02.length && mid02.length) {
        let temp = new Node();
        node.rChild = temp;
        createTree(fir02, mid02, temp);
    }
}

function print(node) {
    if (!node) {
        return;
    }

    print(node.lChild);
    console.log(node.data);
    print(node.rChild);
}

createTree(first, middle, head);

print(head);