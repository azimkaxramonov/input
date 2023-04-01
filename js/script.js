
let input = document.querySelectorAll('.top .first input')




let btn = document.querySelector('.button button')
let tap = document.querySelectorAll('.top')


function a() {
    input.forEach((elem) =>{
        elem.classList.remove('inpt')
    } )
}
a()
btn.onclick = () => {


    input.forEach((inpt) => {
       
        let img = inpt.parentElement
        let rasmcha = img.parentElement
        let rasm = rasmcha.querySelector('img')
        let text_one =  rasmcha.querySelector('p')
        let text_two = rasmcha.querySelector('span p')
        if (inpt.value === "") {
            
            inpt.style.border = 'solid 2px #EE0004'
            rasm.style.opacity = 1
            text_one.style.color = "#EE0004"
            text_two.style.color = "#EE0004"
            text_two.innerHTML = "Please enter your email adress"
             
        }else{
            inpt.style.border = 'solid 2px #2ecc71'
            rasm.style.opacity = 0
            text_one.style.color = "#2ecc71"
            text_two.style.color = "#2ecc71"
            text_two.innerHTML = 'good job'  
        }

        console.log(inpt);
       
    })
    
}





