import { atroxQuots, sylasQuots, yasuoQuots, yoneQuots } from "./data.js"
import { atroxFn } from "./atrox.js"
import { sylasFn } from "./sylas.js"
import { yasuoFn } from "./yasuo.js"
import { yoneFn } from "./yone.js"


const atroxBtn = document.querySelector('#atroxBtn')
const yasuoBtn = document.querySelector('#yasuoBtn')
const sylasBtn = document.querySelector('#sylasBtn')
const yoneBtn = document.querySelector('#yoneBtn')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const header = document.querySelector('header')
const audio = document.querySelector('audio')


document.querySelector('#yasuo').addEventListener('click', () => {
  header.style.backgroundImage = ("url('image/yasuo.jpeg')")
  atroxBtn.classList.add('hidden')
  sylasBtn.classList.add('hidden')
  yoneBtn.classList.add('hidden')
  yasuoBtn.classList.remove('hidden')
  audio.setAttribute('src', '')
  quote.innerHTML = 'Press the button below to recieve a random quote!'
  author.innerHTML = ''
  quote.style.color = "#566dbd"
  author.style.color = "#151725"
  yasuoFn(yasuoQuots)
})

document.querySelector('#atrox').addEventListener('click', () => {
  header.style.backgroundImage = ("url('image/atrox.jpg')")
  yasuoBtn.classList.add('hidden')
  sylasBtn.classList.add('hidden')
  yoneBtn.classList.add('hidden')
  atroxBtn.classList.remove('hidden')
  audio.setAttribute('src', '')
  quote.innerHTML = 'Press the button below to recieve a random quote!'
  author.innerHTML = ''
  quote.style.color = "#704349"
  author.style.color = "#1d1a1e"
  atroxFn(atroxQuots)
})

document.querySelector('#sylas').addEventListener('click', () => {
  header.style.backgroundImage = ("url('image/sylas.jpg')")
  yasuoBtn.classList.add('hidden')
  atroxBtn.classList.add('hidden')
  yoneBtn.classList.add('hidden')
  sylasBtn.classList.remove('hidden')
  audio.setAttribute('src', '')
  quote.innerHTML = 'Press the button below to recieve a random quote!'
  author.innerHTML = ''
  quote.style.color = "#8c6ab1"
  author.style.color = "#171619"
  sylasFn(sylasQuots)
})

document.querySelector('#yone').addEventListener('click', () => {
  header.style.backgroundImage = ("url('image/yone.jpg')")
  yasuoBtn.classList.add('hidden')
  atroxBtn.classList.add('hidden')
  sylasBtn.classList.add('hidden')
  yoneBtn.classList.remove('hidden')
  audio.setAttribute('src', '')
  quote.innerHTML = 'Press the button below to recieve a random quote!'
  author.innerHTML = ''
  quote.style.color = "#b2cbe2"
  author.style.color = "#212533"
  yoneFn(yoneQuots)
})



header.style.backgroundImage = ("url('image/sylas.jpg')")
yasuoBtn.classList.add('hidden')
atroxBtn.classList.add('hidden')
yoneBtn.classList.add('hidden')
sylasBtn.classList.remove('hidden')
audio.setAttribute('src', '')
quote.innerHTML = 'Press the button below to recieve a random quote!'
author.innerHTML = ''
quote.style.color = "#8c6ab1"
author.style.color = "#171619"
sylasFn(sylasQuots)



