let heap = [];
let arr = [];
let arrLen = Math.floor(Math.random()*20);
for(let i = 0;i<arrLen;i++){
    arr[i] = Math.ceil(Math.random()*50);
}
console.log(arr);

function insertHeap(el) {
    if (heap.length == 0) {
        heap.push(el);
    } else {
        heap.push(el);
        let temp = el;
        let len = heap.length - 1;
        let parent = -1;
        while (true) {
            if (len == 0) {
                break;
            }
            if (len % 2 == 0) {
                parent = Math.floor((len - 1) / 2);
            } else {
                parent = Math.floor(len / 2);
            }
            if (heap[parent] > el) {
                break;
            } else {
                heap[len] = heap[parent];
                heap[parent] = el;
                len = parent;
            }
        }
    }
}

function extractMax() {
    let temp = heap[0];
    heap[0] = heap[heap.length - 1]
    heap.pop();
    let parent = 0;
    let lChild = 0;
    let rChild = 0;
    let swapPos = 0;
    let swapValue = 0;
    while (true) {
        lChild = 2 * parent + 1;
        rChild = 2 * parent + 2;
        if (lChild >= heap.length && rChild >= heap.length) {
            break;
        }
        //考虑rChild越界的undefined
        if ((heap[lChild] <= heap[parent] && heap[rChild] <= heap[parent]) || (heap[lChild] <= heap[parent] && rChild >= heap.length)) {
            break;
        }
        //考虑rChild越界的undefined
        if (rChild >= heap.length) {
            swapPos = lChild;
            swapValue = heap[lChild];
        } else {
            swapPos = (heap[lChild] > heap[rChild]) ? lChild : rChild;
            swapValue = (heap[lChild] > heap[rChild]) ? heap[lChild] : heap[rChild];
        }
        heap[swapPos] = heap[parent];
        heap[parent] = swapValue;
        parent = swapPos;
    }
    return temp;
}

function findPos(k) {
    for (let i = 0; i < heap.length; i++) {
        if (heap[i] == k) {
            return i;
        }
    }
    throw new Error("heap数组中不存在" + k);
}

function addXToK(x, k) {
    let pos = findPos(k);
    if (pos == 0) {
        heap[pos] += x;
        return;
    }
    heap[pos] += x;
    let parent = 0;
    let temp = heap[pos];
    while (true) {
        if(pos == 0){
            break;
        }
        if (pos % 2 == 0) {
            parent = Math.floor((pos - 1) / 2);
        } else {
            parent = Math.floor(pos / 2);
        }
        if (heap[parent] >= heap[pos]) {
            break;
        }
        heap[pos] = heap[parent];
        heap[parent] = temp;
        pos = parent;
    }
}


arr.forEach(element => {
    insertHeap(element);
});
console.log(heap);

console.log("max: " + heap[0]);

console.log("extractMax: " + extractMax());
console.log(heap);

let x = Math.floor(Math.random() * 20);
console.log("insertX: " + x);
insertHeap(x);
console.log(heap);
x = Math.floor(Math.random() * 20);

let random = Math.random();
let k = Math.floor(random * (heap.length - 1));
console.log("add x to k: " + x + ", " + heap[k]);
addXToK(x, heap[k]);
console.log(heap);