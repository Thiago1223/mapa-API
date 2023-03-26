'use strict'

export const preencherDadosHeader = async(sigla) => {
    const url = `http://localhost:8080/estado/${sigla}`
    const response = await fetch(url)
    const estado = await response.json()

    return {
        sigla: estado.uf,
        nome: estado.descricao,
        capital: estado.capital,
        regiao: estado.regiao
    }
}

export const preencherLista = async(sigla) => {
    const url = `http://localhost:8080/v1/senai/cidades/${sigla}`
    const response = await fetch(url)
    const estado = await response.json()

    return {
        cidades: estado.cidades
    }
}