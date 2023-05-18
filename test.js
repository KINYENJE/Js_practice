  const synth = window.speechSynthesis;
  document.querySelector('#check').addEventListener('click', check)

   function check() {

    const day = document.querySelector('#day').value.toLowerCase()
    

    //conditionals go here

    if(day === "tuesday" || day === "thursday"){     
        let shout = 'Tittttyyyy dayyy!!!!!!!'
        let speech = new SpeechSynthesisUtterance(shout)
        synth.speak(speech)

        alert('Tittttyyyy dayyy!!!!!!!')

    }else{
        let shout = 'Borrringgggg!!!!'
        let speech = new SpeechSynthesisUtterance(shout)

        synth.speak(speech)

        alert('Borrringgggg!!!!')

    }

   }