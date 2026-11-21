// Chatbot functionality
        document.addEventListener('DOMContentLoaded', function() {
            const chatbotButton = document.getElementById('chatbotButton');
            const chatWindow = document.getElementById('chatWindow');
            const closeChat = document.getElementById('closeChat');
            const chatMessages = document.getElementById('chatMessages');
            const userInput = document.getElementById('userInput');
            const sendMessage = document.getElementById('sendMessage');
            
            // Toggle chat window
            chatbotButton.addEventListener('click', () => {
                chatWindow.classList.toggle('active');
                userInput.focus();
            });
            
            // Close chat window
            closeChat.addEventListener('click', () => {
                chatWindow.classList.remove('active');
            });
            
            // Send message function
            function sendMessageHandler() {
                const message = userInput.value.trim();
                if (message) {
                    // Add user message
                    addMessage(message, 'user');
                    userInput.value = '';
                    
                    // Simulate bot typing
                    simulateBotResponse(message);
                }
            }
            
            // Send message on button click
            sendMessage.addEventListener('click', sendMessageHandler);
            
            // Send message on Enter key
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessageHandler();
                }
            });
            
            // Add message to chat
            function addMessage(text, sender) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(sender + '-message');
                messageDiv.textContent = text;
                chatMessages.appendChild(messageDiv);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Simulate bot response
            function simulateBotResponse(userMessage) {
                // Show typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.classList.add('typing-indicator');
                typingIndicator.innerHTML = `
                    <span></span>
                    <span></span>
                    <span></span>
                `;
                chatMessages.appendChild(typingIndicator);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate delay for "typing"
                setTimeout(() => {
                    // Remove typing indicator
                    chatMessages.removeChild(typingIndicator);
                    
                    // Generate bot response based on user message
                    let botResponse = '';
                    
                    if (userMessage.toLowerCase().includes('hello') || 
                        userMessage.toLowerCase().includes('hi') || 
                        userMessage.toLowerCase().includes('hey')) {
                        botResponse = "Hello! How can I assist you with my portfolio?";
                    } else if (userMessage.toLowerCase().includes('project') || 
                               userMessage.toLowerCase().includes('work')) {
                        botResponse = "I've worked on various projects including securing webapp, strong password generator, and AI systems. You can find detailed case studies in the projects section.";
                    } else if (userMessage.toLowerCase().includes('skill') || 
                               userMessage.toLowerCase().includes('technology') || 
                               userMessage.toLowerCase().includes('tech')) {
                        botResponse = "My technical skills include JavaScript, React, Node.js, Python, and modern CSS. I'm also experienced in UI/UX design principles.";
                    } else if (userMessage.toLowerCase().includes('experience') || 
                               userMessage.toLowerCase().includes('background')) {
                        botResponse = "I have 3+ years of experience in full-stack development, with a focus on creating responsive, secure, and user-friendly web applications.";
                    } else if (userMessage.toLowerCase().includes('contact') || 
                               userMessage.toLowerCase().includes('reach') || 
                               userMessage.toLowerCase().includes('email')) {
                        botResponse = "You can reach me via email at kiransapkota2058@gmail.com or through the contact form on this website. I typically respond within 24 hours.";
                    } else if (userMessage.toLowerCase().includes('name')) {
                        botResponse = "I'm an AI assistant named 'Agent K' created to help visitors learn more about this portfolio!";
                    } else if (userMessage.toLowerCase().includes('thank')) {
                        botResponse = "You're welcome! Is there anything else I can help with?";
                    } else {
                        // Default response
                        botResponse = "That's an interesting question! As an AI assistant, I can provide information about the portfolio, projects, and skills. Feel free to ask anything specific.";
                    }
                    
                    // Add bot response
                    addMessage(botResponse, 'bot');
                }, 1500);
            }
            
            // Add welcome message after a delay
            setTimeout(() => {
                addMessage("Try asking: 'What projects have you worked on?'", 'bot');
            }, 3000);
        });