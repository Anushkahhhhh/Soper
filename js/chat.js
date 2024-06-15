
document.addEventListener('DOMContentLoaded', () => {
    const posibleQuestionAndAnswer = [
        { question: "Բարև Ձեզ, «Տան որսը» գրքի pdf տարբերակը կա", answer: "Ողջույն, հարգելի ընթերցող, ցավում եմ, բայց ոչ; Կարող եմ առաջարկել նույնաժանր գրքեր :)" },
        { question: "Բարև Ձեզ, ինչ գրքեր կառաջարկեք", answer: "Ողջույն, հարգելի ընթերցող, խնդրում եմ նշել Ձեր սիրելի ժանրը, նախընտրությունները, որպեսզի կարողանամ գրքեր առաջարկել <3" },
        { question: "Չեմ հասկանում, ինչպե՞ս ներբեռնեմ գրքերը", answer: "Ողջույն, հարգելի ընթերցող։ Մուտք գործեք կայքի «Գրքեր» ենթաբաժինը, ընտրեք ցանկալի գիրքը, ներքևի հատվածում կնկատեք «ներբեռնել» կոճակը, սեղմեք կոճակին և կբեռնվի :)" }
    ];

    class Chat {
        constructor() {
            this.messages = [];
        }
        // Contact me if you are cconfused or have questions to ask , and also check the code

        // Good luck :))))

        sendMessage(message) {   //Main function to send the message, separating the user and bot parts
            let answer = this.findAnswer(message);
            this.messages.push({ message: message, sender: 'user' });
            this.displayMessages();
            if (answer) {
                this.showTypingIndicator();
                setTimeout(() => {
                    this.messages.push({ message: answer, sender: 'bot' });
                    this.displayMessages();
                }, 1000);
            }
        }

        displayMessages() {  // function responsible for the divs of question and answer to be displayed
            const chatMessages = document.getElementById('chatdiv');
            chatMessages.innerHTML = this.messages.map(({ message, sender }) => {
                const messageClass = sender === 'user' ? 'right' : 'left';
                return `<div class="message-container ${messageClass}">${message}</div>`;
            }).join('');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        findAnswer(question) {  // the function to find the answer of the question in the list
            const foundQuestion = posibleQuestionAndAnswer.find(qa => qa.question.toLowerCase() === question.toLowerCase());
            return foundQuestion ? foundQuestion.answer : "Ողջույն սիրելի ընթերցող, մեր օպերատորները շուտով կարձագանքեն Ձեզ";
        }

        showTypingIndicator() { // 3 dots that start moving and wait for 1 second to display the answer of the bot
            const typingIndicator = document.createElement('div');
            typingIndicator.classList.add('message-container', 'left');
            typingIndicator.innerHTML = '<span class="typing-indicator"><span>.</span><span>.</span><span>.</span></span>';
            const chatMessages = document.getElementById('chatdiv');
            chatMessages.appendChild(typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    const chat = new Chat();

    function sendMessage() {  // thsi function checks the input field and calls the sendMessage function in the class
        const messageInput = document.getElementById('inputtext');
        const message = messageInput.value.trim();
        if (message) {
            chat.sendMessage(message);
            messageInput.value = '';
        }
    }
    // this part is responsible for the Enter key functionality to press it and send the message
    document.getElementById("inputtext").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
    // in this part we invoke the message button 
    document.getElementById("messageButton").addEventListener("click", sendMessage);
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'am' }, 'google_translate_element');
}
