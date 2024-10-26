const typingForm = document.querySelector(".typing_form");
const chatlist = document.querySelector(".chatlist");
const suggestions=document.querySelectorAll(".suggestion-list .suggestion");
let userMessage = null;

const API_KEY = "AIzaSyDNNiF9QjIdqrHWgJqRBKjdWVd1iTA0nMg";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createMessageElement = (content, className) => {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;
};

const showLoadingIndicator = () => {
    const inputField = typingForm.querySelector(".taking-input");
    inputField.placeholder = "Loading...";
};

const hideLoadingIndicator = () => {
    const inputField = typingForm.querySelector(".taking-input");
    inputField.placeholder = "Type something...";
};

const generateAPIResponse = async () => {
    try {
        showLoadingIndicator(); 
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userMessage }]
                }]
            })
        });

        const data = await response.json();
        const apiResponse = data?.candidates[0]?.content?.parts[0]?.text;

        hideLoadingIndicator();
        // Handle incoming message creation after API response
        const html = `
            <div class="messageincoming">
                <div class="message-content">
                    <img src="images/vecteezy_leaf-icon-vector_7202593.jpg" alt="AI" class="avatar">
                    <p class ="chatting">${formatAIResponse(apiResponse)}</p>
                </div>
            </div>`;

        const incomingMessageDiv = createMessageElement(html, "incoming");
        chatlist.appendChild(incomingMessageDiv);

    } catch (error) {
        console.log(error);
    }
};

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".taking-input").value.trim()||userMessage;

    if (!userMessage) return;

    const html = `
        <div class="messageoutgoing">
            <div class="message-content">
                <img src="images/—Pngtree—outline user icon_5045523.png" alt="User" class="avatar">
                <p class ="chatting">${userMessage}</p>
            </div>
        </div>`;

    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    chatlist.appendChild(outgoingMessageDiv);

    typingForm.reset();
    chatlist.scrollTo(0,chatlist.scrollHeight);

    // Call generateAPIResponse after appending outgoing message
    generateAPIResponse();
};

suggestions.forEach(suggestion=>{
    suggestion.addEventListener("click",()=>{
        userMessage=suggestion.querySelector(".text").innerText;
        handleOutgoingChat();
    });
});

typingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleOutgoingChat();
});


    const formatAIResponse = (apiResponse) => {
        // Replace ** ** with <strong> tags for bold text
        let formattedResponse = apiResponse.replace(/\*\*(.*?)\*\*/g, '<br><br><strong>$1</strong>');
        formattedResponse = formattedResponse.replace(/\*(.*?)/g, '<br>$1');
        return formattedResponse;
    };
