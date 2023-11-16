/*Animação Carousel*/ 
function mudarAnimacao(event) {

    let listaAni = document.querySelectorAll("#ani")

    if (event.target.id == "previous") {
        listaAni.forEach(elemento => {
            elemento.className = "animated slideInRight"
        })
    } else if (event.target.id == "next") {
        listaAni.forEach(elemento => {
            elemento.className = "animated slideInLeft"
        })
    }


}


/*Back-top*/ 
window.addEventListener('scroll', () => {
    let numScroll = window.scrollY
    // console.log(numScroll)
    if (numScroll >= 600) {
        document.querySelector('#btnTop').style.display = ""
    } else{
        document.querySelector('#btnTop').style.display = "none"
    }
})

document.querySelector('#btnTop').addEventListener('click', () => {
    window.location.href = "#top"
})
