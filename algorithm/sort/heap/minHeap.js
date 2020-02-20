let arr = [4, 5, 1, 6, 2, 7, 3, 8];
let heap = [];


for (let i = 0; i < arr.length; i++) {
    insert(heap, arr[i]);
}


function insert(heap, el) {
    if (heap.length == 0) {
        heap.push(el);
    } else {
        heap.push(el);
        let pos = heap.length - 1;
        let parent;
        if (pos % 2 == 0) {
            parent = Math.floor((pos - 1) / 2);
        } else {
            parent = Math.floor(pos / 2);
        }
        while (true) {
            if (heap[parent] > heap[pos]) {
                let temp = heap[parent];
                heap[parent] = heap[pos];
                heap[pos] = temp;
            }
            if (parent == 0) {
                break;
            }
            pos = parent;
            if (pos % 2 == 0) {
                parent = Math.floor((pos - 1) / 2);
            } else {
                parent = Math.floor(pos / 2);
            }
        }
    }
}

function pop(heap) {
    let ans = heap.shift();
    let temp = heap.pop();
    heap.unshift(temp);
    let pos = 0;
    let lChild = 1;
    let rChild = 2;
    while (true) {
        temp = heap[lChild] > heap[rChild] ? rChild : lChild;
        if (heap[pos] < heap[temp] || temp > heap.length - 1) {
            break;
        } else {
            let swap = heap[temp];
            heap[temp] = heap[pos];
            heap[pos] = swap;
            pos = temp;
            lChild = temp * 2 + 1;
            rChild = temp * 2 + 2;
        }
    }
    return ans;
}

console.log(heap);
let temp = [];
for(let i =0;i<4;i++){
    temp.push(pop(heap));
}
console.log(temp,heap);