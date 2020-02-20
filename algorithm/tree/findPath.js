let arr = [22, 5, 33, 16, 10, 27, 12, 6, 19];
function Node() {
    this.data;
    this.lChild = null;
    this.rChild = null;
    this.init = false;
}
let head = new Node();

for (let i = 0; i < arr.length; i++) {
    insert(head, arr[i]);
}

//print(head);

function insert(node, temp) {
    if (node.init == false) {
        node.data = temp;
        node.init = true;
    } else {
        if (node.data < temp) {
            if (node.rChild != null) {
                insert(node.rChild, temp);
            } else {
                let tempNode = new Node();
                node.rChild = tempNode;
                insert(tempNode, temp);
            }
        } else {
            if (node.lChild != null) {
                insert(node.lChild, temp);
            } else {
                let tempNode = new Node();
                node.lChild = tempNode;
                insert(tempNode, temp);
            }
        }
    }
}

let path = [];
let target = 82;
function findPath(node) {
    if (node == null) {
        return;
    }
    //console.log(node.data);
    path.push(node.data);
    /*console.log(path.reduce((pre, cur) => {
        return pre + cur;
    }));*/
    if (node.lChild == null && node.rChild == null) {
        //console.log('enter');
        if (path.reduce((pre, cur) => {
            return pre + cur;
        }) == target) {
            console.log(path);
        }
    }
    findPath(node.lChild); 
    findPath(node.rChild);
    path.pop();
}

findPath(head);