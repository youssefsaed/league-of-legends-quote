


export function atroxFn(atroxQuots) {

    const atroxBtn = document.querySelector('#atroxBtn')
    atroxBtn.addEventListener('click', () => {
        let random = Math.floor((Math.random() * atroxQuots.length)); 
        document.getElementById('quote').innerHTML = `\"${atroxQuots[random].quote}\"`;
        document.getElementById('author').innerHTML = `--${atroxQuots[random].author}`;
        document.querySelector('audio').setAttribute('src', atroxQuots[random].audio)


    })
}