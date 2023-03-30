const buttons = document.querySelectorAll("#button-conteudo")
const images = document.querySelector("#imgs-cronograma")


buttons.forEach((button) => {
    button.addEventListener("click", (e)=> {
        let target = e.target
        let botao = target.id
     
        showImage(botao)
    })
})

function showImage(image) {
    // "use strict"
    // let url = ""
    switch (image) {
        case "h": 
            url = "img/hidratacao-capilar-1.webp"
            break
        case "n" :
            url = "img/nutrica-capilar-1.webp"
            break
        case "r":
            url = "img/recontrucao-capilar-1.webp"
            break
    }
    images.innerHTML = `<img src='${url}' id='img-${image}'>`
} 