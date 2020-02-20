const WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

//连接池
var clients = [];


/*
    socket的四种连接状态
    CONNECTING：值为0，表示正在连接；
    OPEN：值为1，表示连接成功，可以通信了；
    CLOSING：值为2，表示连接正在关闭；
    CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
*/

/*
    创建一个WebSocketServer的服务，同时监听8080端口的连接请求。
    每当有新的客户端连接该WebSocket成功时，便将该连接push到连接池的数组中。
    监听message事件，当该事件发生时，遍历连接池，以连接为单位将该消息转发到对应的客户端
    监听close事件，当该事件发生时，将该连接移出连接池
*/

wss.on('connection', function (ws) {
    //将该连接加入连接池
    clients.push(ws);
    ws.on('message', function (message) {
        //广播消息
        console.log(message);
        ws.send("I have received message!");
        //向连接池中的其它连接发送消息
        if (message == "exit") {
            ws.close();
            clients.forEach(function (ws1) {
                if (ws1 != ws) {
                    ws1.send(message);
                }
            });
        } else {
            clients.forEach(function (ws1) {
                if (ws1 != ws) {
                    ws1.send(message);
                }
            });
        }
    });

    ws.on('close', function (message) {
        console.log("从连接池中剔除已关闭的连接。");
        clients = clients.filter(function (ws1) {
            return ws1 != ws;
        });
    });
});