function Node() {
    this.data = '';
    this.lChild = null;
    this.rChild = null;
    this.parent = null;
    this.init = false;
}


let num11;
function insert(node, num) {
    if (!node.init) {
        node.init = true;
        node.data = num;
        if (num == 8) {
            num11 = node;
        }
    } else {
        if (node.data > num) {
            if (node.lChild) {
                insert(node.lChild, num);
            } else {
                let temp = new Node();
                temp.parent = node;
                node.lChild = temp;
                insert(temp, num);
            }
        } else {
            if (node.rChild) {
                insert(node.rChild, num);
            } else {
                let temp = new Node();
                temp.parent = node;
                node.rChild = temp;
                insert(temp, num);
            }
        }
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



let arr = [11, 23, 45, 6, 21, 71, 5, 8, 7];
let head = new Node();
for (let i = 0; i < arr.length; i++) {
    insert(head, arr[i]);
}
//print(head);


//console.log(num21);
//中序遍历num21下一个结点
function indexNode(node) {
    if (node.rChild) {
        let temp = node.rChild;
        while (temp.lChild) {
            temp = temp.lChild;
        }
        console.log(temp.data)
    } else {
        if (node.parent) {
            let temp = node.parent;
            while (temp.parent) {
                if (temp == temp.parent.lChild) {
                    console.log(temp.parent.data);
                    return;
                } else {
                    temp = temp.parent;
                }
            }
        }
    }
}

indexNode(num11);

