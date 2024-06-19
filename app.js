const socket = new WebSocket('wss://your-backend-server.herokuapp.com');

socket.onmessage = function(event) {
    const chat = document.getElementById('chat');
    const message = document.createElement('div');
    message.textContent = event.data;
    chat.appendChild(message);
};

function sendMessage() {
    const messageInput = document.getElementById('message');
    socket.send(messageInput.value);
    messageInput.value = '';
}
