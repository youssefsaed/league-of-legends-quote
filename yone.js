


export function yoneFn(yoneQuots) {

    const yoneBtn = document.querySelector('#yoneBtn')
    yoneBtn.addEventListener('click', () => {
        let random = Math.floor((Math.random() * yoneQuots.length));
        document.getElementById('quote').innerHTML = `\"${yoneQuots[random].quote}\"`;
        document.getElementById('author').innerHTML = `--${yoneQuots[random].author}`;
        document.querySelector('audio').setAttribute('src', yoneQuots[random].audio)


    })
}