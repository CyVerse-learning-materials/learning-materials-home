// chatbot_widget.js

document.addEventListener('DOMContentLoaded', function () {
    // Create the chat icon button
    const chatIcon = document.createElement('div');
    chatIcon.id = 'chat-icon';
    chatIcon.innerHTML = `<img src="https://img.icons8.com/fluency/48/000000/chat--v2.png" alt="Chat Icon">`;
    document.body.appendChild(chatIcon);

    // Create the chat window container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.innerHTML = `
        <div id="chat-header">
            <span>FOSS Chatbot</span>
            <button id="chat-close">X</button>
        </div>
        <div id="chat-body">
            <iframe src="https://chat-qa.cyverse.org/chatbot1" id="chat-frame" width="100%" height="100%"></iframe>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // Show or hide the chatbot window
    chatIcon.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Close the chat window
    document.getElementById('chat-close').addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });
});