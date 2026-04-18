let h1Rise = document.getElementById("h1Rise")
let inputRise = document.getElementById("RiseMoneyInput")
let inputButton = document.getElementById("RiseMoneyButton")
//money
//paramoney

function SaveMoney() {
  localStorage.setItem("money" , String(money))
}

function GetMoneyOnInput() {
  return inputRise.value
}

function StartAposta() {
  let apostavalue = GetMoneyOnInput()
  let minaposta = 1

  if (apostavalue >= minaposta) {
    
  }
}