var graph = [
    [0, 5, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, 0, -1, 1, 3, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [3, -1, 0, -1, 8, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, 0, -1, -1, -1, 6, 8, -1, -1, -1, -1, -1, -1, -1],
    [-1, 3, 8, -1, 0, -1, -1, 3, 5, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 0, -1, -1, 3, 3, -1, -1, -1, -1, -1, -1],
    [-1, -1, 6, -1, -1, -1, 0, -1, 8, 4, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 6, 3, -1, -1, 0, -1, -1, 2, 2, -1, -1, -1, -1],
    [-1, -1, -1, 8, 5, 3, 8, -1, 0, -1, -1, 1, 2, -1, -1, -1],
    [-1, -1, -1, -1, -1, 3, 4, -1, -1, 0, -1, 3, 3, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, 2, -1, -1, 0, -1, -1, 3, 5, -1],
    [-1, -1, -1, -1, -1, -1, -1, 2, 1, 3, -1, 0, -1, 5, 2, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, 2, 3, -1, -1, 0, 6, 6, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 5, 6, 0, -1, 4],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 2, 6, -1, 0, 3],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0],
];

//记录每一点到源点距离以及已遍历点的集合
var distance = [];
var set = [];
for (let i = 0; i < graph.length; i++) {
    set[i] = 0;
    distance[i] = 0;
}


function dijkstra() {
    let tempMin;
    let pos;
    let min;
    for (let i = 0; i < set.length; i++) {
        tempMin = 0;
        min = 0;
        if (i == 0) {
            set[i] = 1;
            for (let j = 1; j < distance.length; j++) {
                distance[j] = graph[i][j];
            }
        } else {
            for (let j = 1; j < set.length; j++) {
                if (distance[j] != -1 && set[j] != 1) {
                    tempMin = distance[j];
                    if (min == 0) {
                        min = tempMin;
                        pos = j;
                    } else {
                        if (min > tempMin) {
                            min = tempMin;
                            pos = j;
                        }
                    }
                }
            }
            
            for (let j = 0; j < distance.length; j++) {
                if (graph[pos][j] != -1) {
                    if (distance[j] == -1) {
                        distance[j] = distance[pos] + graph[pos][j];
                    } else if (distance[pos] + graph[pos][j] < distance[j]) {
                        distance[j] = distance[pos] + graph[pos][j];
                    }
                }
            }
            set[pos] = 1;
            //console.log(pos);
            //console.log(distance);
        }
    }
}

dijkstra();
console.log(distance);