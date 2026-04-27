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
let end = false
const interval = 5
const task = {}
const originalcolor = h1Rise.style.color

task.wait = function(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

function random(MaxParam) {
  let resultado = Math.random() * MaxParam + 1
  resultado = Math.floor(resultado)

  return resultado
}

function setparamoney() {
  paramoney.textContent = "R$ " + money.toFixed(2)
}

setparamoney()

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

async function StartGame(dinheiroapostado) {
  if (!inround) {
    inround = true
    money -= dinheiroapostado
    setparamoney()
    SaveMoney()
  if (h1Rise.style.color === "red" || h1Rise.style.color === "green") {
    h1Rise.style.color = originalcolor
  }

  for (let i = 0; i < 99999999; i++) {
    
    let apostado = GetMoneyOnInput()
    let mont = Math.floor((1 + i / 100) * 100) / 100
    h1Rise.innerText = mont + "x" + " " +   "(+" + Math.floor((apostado * mont) * 100) / 100 + "R$)"
    let stop = random(75)
    inputButton.innerText = "Parar"
    if (end) {
      end = false
      h1Rise.innerText = `+${(apostado * mont).toFixed(2)}R$`
      h1Rise.style.color = "green"
      inputButton.innerText = "Confirmar"
      money += (apostado * mont)
      SaveMoney()
      setparamoney()
      inround = false
      break
    }
    if (stop === 1) {
      h1Rise.innerText = "Crashed"
      h1Rise.style.color = "red"
      inputButton.innerText = "Confirmar"
      inround = false
      break
    }

    await task.wait(0.15)

  }
}
}

function EndGame() {
end = true
}

async function StartAposta() {
  let apostavalue = GetMoneyOnInput()
  let minaposta = 0.50
  if (inround) {
    EndGame()
  }
  if (apostavalue >= minaposta) {
    if (money >= apostavalue) {
      await StartGame(apostavalue)
    }
  } else {
    alert("Insira um valor válido!")
  }
  
}
