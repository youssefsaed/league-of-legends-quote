


export function sylasFn(sylasQuots) {

    const sylasBtn = document.querySelector('#sylasBtn')
    sylasBtn.addEventListener('click', () => {
        let random = Math.floor((Math.random() * sylasQuots.length));
        document.getElementById('quote').innerHTML = `\"${sylasQuots[random].quote}\"`;
        document.getElementById('author').innerHTML = `--${sylasQuots[random].author}`;
        document.querySelector('audio').setAttribute('src', sylasQuots[random].audio)


    })
}