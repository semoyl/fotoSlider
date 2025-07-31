'use strict'

console.log ("teste")

async function pesquisarFotos() {
    
    const url = `http://localhost:3000/fotos`

    const response = await fetch(url)
    
    const data = await response.json()


    console.log(data) 

    return data
}

function criarImagens(link){
    const slides = document.querySelector('.slider')
    const novaImg = document.createElement('img')

    console.log(slides)

    novaImg.src = link.imagem
    
    slides.appendChild
}

async function preencherFotos() {
    const fotos = await pesquisarFotos()

    console.log(fotos)

    fotos.forEach(criarImagens)
}

preencherFotos()