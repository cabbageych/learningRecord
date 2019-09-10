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
    let midPre = mid.slice(0, pos + 1);
    let midAfter = mid.slice(pos + 1, mid.length);
    let firPre = fir.slice(1, pos + 1);
    let firAfter = fir.slice(pos + 1, fir.length);
    let lChild = new Node();
    let rChild = new Node();
    if (firPre.length > 0 && midPre.length > 0) {
        node.lChild = lChild;
        createTree(firPre, midPre, lChild);
    }
    if (firAfter.length > 0 && midAfter.length > 0) {
        node.rChild = rChild;
        createTree(firAfter, midAfter, rChild);
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