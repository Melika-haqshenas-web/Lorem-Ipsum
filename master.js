let button = document.getElementById('button')
let amount = document.getElementById('amount')
let lorem = document.getElementById('lorem-text')
let para = document.querySelectorAll('p')
let error = document.getElementById('error')

fetch('https://64b3b0b00efb99d8626845b4.mockapi.io/api/v1/mydata')
    .then(res => res.json())
    .then(mydata => {
        button.addEventListener('click', () => {
            show(mydata)
        })
        amount.addEventListener('keyup' , ({key})=>{
            if(key == 'Enter'){
                show(mydata)
            }
        })
    })

function show(mydata) {
    if (lorem.hasChildNodes()) {
        for (let i = 0; i < para.length; i++) {
            para[i].remove()
        }
    }
    let number = amount.value
    if(number > 101){
        number = 100
        amount.value = 100
        error.style.display = 'flex'
        setTimeout(() => {
            error.style.display = 'none'
        }, 2000);
    }
    mydata.map((val, index) => {
        if (index < number) {
            let p = document.createElement('p')
            p.innerHTML = val.paragraph
            lorem.appendChild(p)
        }
    })
    para = document.querySelectorAll('p')
}