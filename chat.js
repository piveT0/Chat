var mensagens = document.getElementById('messages')
var msg = document.getElementById('msg')
var btn = document.getElementById('send')
var user = prompt('Qual seu nome/nick?');
msg.focus()

function sendMessage() {
    var text = msg.value
    mensagens.innerHTML += `${user}: ${text}<br>`
    msg.value = ''
    
}

msg.addEventListener('keypress', (e) => {
    var key = e.keyCode;
    if (key == 13) {
        console.log('Enviada com Enter')
        btn.click()
    }
})