// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCrianças = document.getElementById("crianças")
let inputDuração = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let crianças = inputCrianças.value
    let duracao = inputDuração.value


    let carne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * crianças)
    let cerveja = cervejaPP(duracao) * adultos
    let bebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * crianças)
    

    resultado.innerHTML = `<p>${carne / 1000} Kg de Carne </p>` 
    resultado.innerHTML += `<p>${Math.ceil(cerveja / 355)} Latas de Cerveja </p>` 
    resultado.innerHTML += `<p>${Math.ceil(bebidas / 2000)} Garrafas de Bebida </p>` 

}
function carnePP(duracao){

    if (duracao >= 6){
    return 650
    }else{
    return 400
    }

}
function cervejaPP(duracao){

    if (duracao >= 6){
    return 2000
    }else{
    return 1200
    }

}
function bebidasPP(duracao){

    if (duracao >= 6){
    return 1500
    }else{
    return 1000
    }

}