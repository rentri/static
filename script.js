document.getElementById('new-chat').addEventListener('click', addDiv);


function addDiv() {
    let chatName = prompt("PLease enter chat name: ", "chat name");
    var chatDiv = document.createElement('h1');
    if (chatName != null) {
        chatDiv.className = 'chats';
        chatDiv.innerHTML = chatName;
        document.getElementById('leftbar').appendChild(chatDiv);
    }
}

document.getElementById('submit').addEventListener('click', msg);

var enter = document.getElementById('input');

enter.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
}); 

function msg() {
    var message = document.getElementById('input').value;
    var msgDiv = document.createElement('p');
    if (message != null) {
        msgDiv.className = 'msg';
        msgDiv.innerHTML = message;
        document.getElementById('msg-field').append(msgDiv);
    }
}


