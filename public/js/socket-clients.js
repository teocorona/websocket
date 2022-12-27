//html referecees

const labelOnline = document.querySelector('#label-online') 
const labelOffline = document.querySelector('#label-offline')
const inputTxt = document.querySelector('#inputTxt')
const btnSend = document.querySelector('#btnSend')





const socket = io();

socket.on('connect', () => {
    // console.log('Conectado')
    labelOffline.style.display = 'none'
    labelOnline.style.display = ''
})
socket.on('disconnect', () => {
    // console.log('Desonectado')
    labelOnline.style.display = 'none'
    labelOffline.style.display = ''
})

socket.on('send-msg', (payload) => {
    console.log(payload)
})


btnSend.addEventListener('click', ()=> {
    const msg = inputTxt.value;
    const payload = {
        msg,
        id: 'teo',
        date: 7873824783748934
    }
    socket.emit('send-msg', payload, (id)=>{
        console.log('return from server', id)
    });
})
