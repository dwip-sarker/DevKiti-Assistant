import {
    kitiSelf,
    cdn,
    link
} from './brain.js';

function wish() { //This function can wish us.
    const dateObj = new Date;
    const hour = dateObj.getHours();

    function greeings() {
        if (hour > 12) {
            return "Good afternoon";
        } else if (hour > 18) {
            return "Good Evening";
        } else {
            return "Good Morning";
        }
    }

    const myMsg = document.createElement("p");
    myMsg.classList.add("msg", "her_msg");
    myMsg.textContent = `${greeings()} sir. How can I help?`;
    const msgArea = document.querySelector(".message_area");
    msgArea.appendChild(myMsg);


}

function myMsgCareator(inputValue) { //this function can create and display our massage
    const myMsg = document.createElement("p");
    myMsg.classList.add("msg", "my_msg");
    myMsg.textContent = inputValue;
    const msgArea = document.querySelector(".message_area");
    msgArea.appendChild(myMsg);
    msgArea.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

function herMsgCareator(inputValue) { //this function can create and display our massage
    const myMsg = document.createElement("p");
    myMsg.classList.add("msg", "her_msg");
    myMsg.textContent = inputValue;
    const msgArea = document.querySelector(".message_area");
    msgArea.appendChild(myMsg);
    msgArea.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}





function output(inputedMessage) { //Output function______
    const message = inputedMessage.replace("?", "")
    const messageLC = message.toLowerCase();

    function textQuery(message, db) { //this is query function.
        let msgWord = messageLC.split(" ")
        msgWord.forEach(matchWord);

        function matchWord(word) {
            if (db.has(word)) {
                herMsgCareator(db.get(word));
                return false;
            }
        }
    }

    function listQuery() {
        let msgWord = messageLC.split(" ")
        msgWord.forEach(matchWord);

        function matchWord(word) {
            if (db.has(word)) {
                herMsgCareator(db.get(word));
                return false;
            }
        }
    }





    if (message.search(/your/i) > -1) {
        textQuery(message, kitiSelf);
    } else if (message.search(/cdn/i) > -1) {
        textQuery(message, cdn);
    } else if (message.search(/link/i) > -1) {
        textQuery(message, link);
    }



}


function processing() { //this function will called myMsgCareator function.
    const input = document.querySelector(".input")
    const inputVal = input.value;
    myMsgCareator(inputVal);
    output(inputVal);
    input.value = "";
}


const input = document.querySelector("input");
input.addEventListener("keyup", function (event) { //event listiner will active when user clicked enter.
    if (event.keyCode === 13) {
        event.preventDefault();
        processing()
    }
});

wish();
const sendButton = document.querySelector(".send");
sendButton.addEventListener("click", processing); //Button click event.