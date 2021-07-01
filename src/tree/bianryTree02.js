let arr = [22, 33, 5, 10, 6, 19, 27]
function Node() {
    this.data;
    this.lChild = null;
    this.rChild = null;
}
let head = new Node();

for (let i = 0; i < arr.length; i++) {
    insert(head, arr[i]);
}

print(head);

function insert(node, temp) {
    if (node == head && node.data == undefined) {
        node.data = temp;
    } else {
        if (node.data < temp) {
            if (node.rChild != null) {
                insert(node.rChild, temp);
            } else {
                let tempNode = new Node();
                node.rChild = tempNode;
                tempNode.data = temp;
            }
        } else {
            if (node.lChild != null) {
                insert(node.lChild, temp);
            } else {
                let tempNode = new Node();
                node.lChild = tempNode;
                tempNode.data = temp;
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