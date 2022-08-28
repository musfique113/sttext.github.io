var btn = document.querySelector('.btn')
btn.addEventListener('click', (ea) => {
    btn.classList.add('fade')
    
    let recognition = new  webitSpeechRecogination()
    recognition.lang = 'en-GB'
    recognition.addEventListener('result', (e) => {
        document.querySelector('.text').value = e.results[0][0].transcpit
        btn.classList.remove('fade')
    })
    recognition.start()
})