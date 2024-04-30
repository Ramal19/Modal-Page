const btn = document.querySelector('#button');

const modal = document.querySelector('.two');

const closeBtn1 = document.querySelector('#close')

const closeBtn2 = document.querySelector('.btn1')

btn.addEventListener('click', ()=>{

    modal.style.display = 'flex'
})

closeBtn1.addEventListener('click', ()=>{

    modal.style.display = 'none'
})

closeBtn2.addEventListener('click', ()=>{

    modal.style.display = 'none'
})
