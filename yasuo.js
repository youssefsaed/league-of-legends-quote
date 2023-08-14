


export function yasuoFn(yasuoQuots) {

    const yasuoBtn = document.querySelector('#yasuoBtn')
    yasuoBtn.addEventListener('click', () => {
        let random = Math.floor((Math.random() * yasuoQuots.length));
        document.getElementById('quote').innerHTML = `\"${yasuoQuots[random].quote}\"`;
        document.getElementById('author').innerHTML = `--${yasuoQuots[random].author}`;
        document.querySelector('audio').setAttribute('src', yasuoQuots[random].audio)


    })
}