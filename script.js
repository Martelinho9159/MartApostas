let JogosButton = document.getElementById("JogosButton")
let Games = document.getElementById("Jogos")
let RiseButton = document.getElementById("Rise")
let RiseDisc = document.getElementById("RiseP")
let RiseDiv = document.getElementById("RiseDiv")
let paramoney = document.getElementById("Money")
let money = Number(localStorage.getItem("money")) || 100
let h1Rise = document.getElementById("h1Rise")
let inputRise = document.getElementById("RiseMoneyInput")
let inputButton = document.getElementById("RiseMoneyButton")
let inround = false
let alreadyaposta = false
const interval = 5
const task = {}
const originalcolor = h1Rise.style.color

task.wait = function(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

async function StartNextRound() {
while (await task.wait(interval)) {



}
}

function random(MaxParam) {
  let resultado = Math.random() * MaxParam + 1
  resultado = Math.floor(resultado)

  return resultado
}

paramoney.textContent = "R$ " + String(money) + ".00"

Games.style.visibility = "hidden";
      function Switch() {
  if (Games.style.visibility === "hidden") {
    Games.style.visibility = "visible";
  } else {
    Games.style.visibility = "hidden";
  }
  RiseDiv.style.visibility = "hidden";
  if (RiseDisc.style.visibility == "visible") {
    RiseDisc.style.visibility = "hidden";
  }
}

function OnRise() {

  Games.style.visibility = "hidden";
  RiseDiv.style.visibility = "visible";



}

function RiseHover() {
  RiseDisc.style.visibility = "visible";
}
function RiseHoverLeave() {
  RiseDisc.style.visibility = "hidden";
}

function SaveMoney() {
  localStorage.setItem("money" , String(money))
}

function GetMoneyOnInput() {
  return Number(inputRise.value)
}

StartNextRound()

async function StartGame() {
  if (!inround) {
    inround = true
  if (h1Rise.style.color === "red") {
    h1Rise.style.color = originalcolor
  }

  for (let i = 0; i < 99999999; i++) {
    let apostado = GetMoneyOnInput()
    let mont = Math.floor((1 + i / 100) * 100) / 100
    h1Rise.innerText = mont + "x" + " " +   "(+" + Math.floor((apostado * mont) * 100) / 100 + "R$)"
    let stop = random(75)
    if (stop === 1) {
      h1Rise.innerText = "Crashed"
      h1Rise.style.color = "red"
      inround = false
      break
    }

    await task.wait(0.2)

  }
} else {
  alert("Espere até que o próximo round aconteça!")
}
}

async function StartAposta() {
  let apostavalue = GetMoneyOnInput()
  let minaposta = 0.50

  if (apostavalue >= minaposta) {
    await StartGame()
  } else {
    alert("Insira um valor válido!")
  }
}