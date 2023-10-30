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
