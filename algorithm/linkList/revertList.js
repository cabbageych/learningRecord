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

function revert(node) {
    let arr = [];
    while (node) {
        arr.push(node);
        node = node.next;
    }
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            arr[i].next = arr[i + 1];
        } else {
            arr[i].next = null;
        }
    }
    head = arr[0];
}


for (let i = 0; i < arr.length; i++) {
    addNode(head, arr[i]);
}
revert(head);
print(head);
