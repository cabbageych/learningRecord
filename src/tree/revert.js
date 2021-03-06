//二叉树反转
//BFS
function Node() {
    let data;
    let lChild = null;
    let rChild = null;
    let init = false;
}
let arr = [4, 2, 7, 1, 3, 6, 9];
function insert(node, data) {
    if (!node.init) {
        node.data = data;
        node.init = true;
    } else {
        if (node.data > data) {
            if (node.lChild) {
                insert(node.lChild, data);
            } else {
                let temp = new Node();
                node.lChild = temp;
                insert(temp, data);
            }
        } else {
            if (node.rChild) {
                insert(node.rChild, data);
            } else {
                let temp = new Node();
                node.rChild = temp;
                insert(temp, data);
            }
        }
    }
}
let head = new Node();
for (let i = 0; i < arr.length; i++) {
    insert(head, arr[i]);
}


function BFS(node) {
    let que01 = [node];
    while (que01.length > 0) {
        if (que01[0].lChild) {
            que01.push(que01[0].lChild);
        }
        if (que01[0].rChild) {
            que01.push(que01[0].rChild);
        }
        console.log(que01.shift().data);
    }
}

function revert(node) {
    let que01 = [node];
    while (que01.length > 0) {
        let temp = que01[0].rChild;
        que01[0].rChild = que01[0].lChild;
        que01[0].lChild = temp;
        if (que01[0].lChild) {
            que01.push(que01[0].lChild);
        }
        if (que01[0].rChild) {
            que01.push(que01[0].rChild);
        }
        que01.shift();
        //console.log(que01.shift().data);
    }
}

function revertRecursion(node) {
    if (node == null) {
        return;
    } else {
        let tempNode = node.lChild;
        node.lChild = node.rChild;
        node.rChild = tempNode;
        revertRecursion(node.lChild);
        revertRecursion(node.rChild);
    }

}

BFS(head);
console.log('------revert---------');
revert(head);
BFS(head);

console.log('------revertRecursion---------');
revertRecursion(head);
BFS(head);

