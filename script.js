AOS.init();

let doc = document
let text = doc.querySelector('.aw')
let buton = doc.querySelector('button')
let div = doc.querySelector('.sa')
let forma = doc.querySelector('form')
let form = doc.querySelector('.forma')

forma.addEventListener("submit", (event) => {
    event.preventDefault()
    let p_text = doc.createElement('h1')
    let p = doc.createElement('p')
    let d = doc.createElement('img')
    p_text.textContent = forma[0].value
    p.textContent = '18:44'
    d.src = './Group 14.svg'
    p.classList.add('p')
    d.classList.add('d')
    forma.appendChild(p_text)
    forma.appendChild(p)
    forma.appendChild(d)
    forma[0].value = ""
    console.log(FormData);
    d.addEventListener("click", (event) => {
        event.preventDefault()
        p_text.classList.toggle('p_text_netu')
        p.classList.toggle('d_netu')
        d.classList.toggle('p_netu')
    })
})

