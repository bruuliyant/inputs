AOS.init();

let doc = document
let text = doc.querySelector('.aw')
let buton = doc.querySelector('button')
let div = doc.querySelector('.sa')
let forma = doc.querySelector('form')
let form = doc.querySelector('.forma')

forma.addEventListener("submit", (event) => {
    event.preventDefault()
    let time = new Date()
    let p_text = doc.createElement('h1')
    let p = doc.createElement('p')
    let d = doc.createElement('img')
    let a = doc.createElement('input')
    a.type = 'date'
    p_text.textContent = forma[0].value
    p.textContent = time.toLocaleTimeString()
    d.src = './Group 14.svg'
    p.classList.add('p')
    d.classList.add('d')
    a.classList.add('sa')
    forma.appendChild(p_text)
    forma.appendChild(p)
    forma.appendChild(d)
    forma.appendChild(a)
    forma[0].value = ""
    console.log(FormData);
    d.addEventListener("click", (event) => {
        event.preventDefault()
        p_text.classList.toggle('p_text_netu')
        p.classList.toggle('d_netu')
        d.classList.toggle('p_netu')
        a.classList.toggle('a_netu')
    })
})
