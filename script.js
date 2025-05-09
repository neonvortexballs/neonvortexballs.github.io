// script.js

let username = "";
let messageBox = document.getElementById('chat-box');
let sendButton = document.getElementById('send-btn');
let messageInput = document.getElementById('message-input');
let usernameInput = document.getElementById('username');
let setUsernameButton = document.getElementById('set-username-btn');
let usernameContainer = document.getElementById('username-container');
let chatContainer = document.getElementById('chat-container');

// Show the username input prompt first
console.log('Page loaded. Waiting for username...');
setUsernameButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    console.log('Username set:', username);
    if (username.length > 0) {
        // Hide username input and show chat interface
        usernameContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
        console.log('Chat interface shown');
    } else {
        alert("Please enter a valid username.");
    }
});

// Send message
sendButton.addEventListener('click', () => {
    let messageText = messageInput.value.trim();
    if (messageText.length > 0) {
        addMessage(messageText, 'sent');
        messageInput.value = '';
    }
});

// Add message to the chat box
function addMessage(messageText, type) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'sent' ? 'message-sent' : 'message-received');
    messageDiv.textContent = `${username}: ${messageText}`;
    messageBox.appendChild(messageDiv);
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

// Handle "Enter" key to send messages
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
