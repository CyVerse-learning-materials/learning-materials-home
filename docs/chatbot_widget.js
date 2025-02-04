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
            <span>CyVerse Learning Chatbot</span>
            <button id="chat-close">X</button>
        </div>
        <div id="chat-body">
            <iframe 
                src="https://chat-qa.cyverse.org/foss/" 
                id="chat-frame" 
                width="100%" 
                height="100%"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            ></iframe>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // Add event listener for iframe messages
    window.addEventListener('message', function(event) {
        // Verify the origin of the message
        if (event.origin === 'https://chat-qa.cyverse.org/foss/') {
            if (event.data.type === 'link') {
                // Open link in new tab
                window.open(event.data.url, '_blank', 'noopener,noreferrer');
            }
        }
    });

    // Show or hide the chatbot window
    chatIcon.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Close the chat window
    document.getElementById('chat-close').addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });

    // Add event listener to handle links inside the iframe
    const chatFrame = document.getElementById('chat-frame');
    chatFrame.onload = function() {
        try {
            // Add click event listeners to all links in the iframe
            const iframeLinks = chatFrame.contentDocument.getElementsByTagName('a');
            Array.from(iframeLinks).forEach(link => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.open(link.href, '_blank', 'noopener,noreferrer');
                });
            });
        } catch (e) {
            console.log('Note: Cross-origin restrictions prevent direct iframe manipulation');
        }
    };
});
