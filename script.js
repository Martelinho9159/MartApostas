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

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
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

async function StartGame() {
  for (let i = 0; i < 99999999; i++) {
    h1Rise.innerText = Math.floor((1 + i / 100) * 100) / 100 + "x"
    let stop = random(75)
    if (stop === 1) {
      h1Rise.innerText = "Crashed"
      h1Rise.style.color = "red"
      break
    }
    await wait(0.2)
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