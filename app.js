'use strict'

let indiceAtual = 0
let imagens = []

async function pesquisarFotos() {
  const url = `http://localhost:3000/fotos`

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (erro) {
    console.error("Erro ao buscar fotos:", erro)
    return []
  }
}

function mostrarImagem(index) {
  const slider = document.querySelector('.slider')
  const foto = imagens[index]

  slider.innerHTML = `
    <p class="data">${foto.data}</p>
    <p class="descricao">${foto.descricao}</p>
    <img src="${foto.imagem}" alt="${foto.descricao}">
  `
}

function avancarImagem() {
  if (imagens.length === 0) return
  indiceAtual = (indiceAtual + 1) % imagens.length
  mostrarImagem(indiceAtual)
}

function voltarImagem() {
  if (imagens.length === 0) return
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length
  mostrarImagem(indiceAtual)
}

async function iniciarSlider() {
  imagens = await pesquisarFotos()
  if (imagens.length > 0) {
    mostrarImagem(indiceAtual)

    document.querySelector('.prev-button').addEventListener('click', voltarImagem)
    document.querySelector('.next-button').addEventListener('click', avancarImagem)
  }
}

iniciarSlider()
