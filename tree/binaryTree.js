let arr = [22, 33, 5, 10, 6, 19, 27]
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

print(head);

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

function print(node) {
    if (node == null) {
        return;
    }
    print(node.lChild);
    console.log(node.data);
    print(node.rChild);
}