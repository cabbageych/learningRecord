function Node() {
    let data;
    let next = null;
}

let arr = [11, 23, 4, 5, 90, 8];
let head = new Node();
function addNode(node, data) {
    if (node.data == undefined && node == head) {
        node.data = data;
    } else {
        if (node.next == null) {
            let temp = new Node();
            temp.data = data;
            node.next = temp;
        } else {
            addNode(node.next, data);
        }
    }
}

function print(node) {
    if (node == null) {
        return;
    }
    console.log(node.data);
    print(node.next);
}

for (let i = 0; i < arr.length; i++) {
    addNode(head, arr[i]);
}
print(head);
