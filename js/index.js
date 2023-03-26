'use strict'

import { preencherDadosHeader } from "./app.js"
import { preencherLista } from "./app.js"

const mapa = document.querySelector('svg')

const preencherDados = async(sigla) => {

    const preencherHeader = await preencherDadosHeader(sigla)
    document.getElementById('sigla-estado').textContent = preencherHeader.sigla
    document.getElementById('nome-estado').textContent = preencherHeader.nome
    document.getElementById('nome-capital').textContent = preencherHeader.capital
    document.getElementById('nome-regiao').textContent = preencherHeader.regiao

    const preencherListaCidades = await preencherLista(sigla)

    const preencherCidades = preencherListaCidades.cidades.map((cidade) => {
        const li = document.createElement('li')
        li.textContent = cidade
        return li
    })

    document.getElementById('nome-cidades').replaceChildren(...preencherCidades)

}

const carregarCard = () => {
    const cardInfo = document.getElementById('container-card-info')
    cardInfo.classList.remove('container-card-info-none')
}

const getEstados = (event) => {
    const estado = event.target.id.replace('BR-', '')
    preencherDados(estado)
    carregarCard()
}

mapa.addEventListener('click', getEstados)