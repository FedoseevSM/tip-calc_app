const digit = ["5%", "10%", "15%", "20%", "25%"]
const input = document.querySelectorAll(".input")
// const check = /[0-9]/ // Добавить проверку на валидность

function reset() {
  document.getElementById("bill").value = ""
  document.getElementById("people").value = ""
  document.getElementById("amount").textContent = "0.00"
  document.getElementById("total").textContent = "0.00"
}

document.getElementById("reset").onclick = reset

document.querySelector(".calc").onclick = (event) => {
  let bill = document.getElementById("bill").value
  let people = document.getElementById("people").value
  if (!event.target.classList.contains("btn")) return
  if ((bill === "" && people === "") || people === "" || bill === "") {
  } else {
    bill = parseInt(document.getElementById("bill").value)
    people = parseInt(document.getElementById("people").value)
    const key = event.target.textContent

    if (digit.includes(key)) {
      let tipAmount = bill + (bill / 100) * parseInt(key)
      document.getElementById("amount").textContent = tipAmount
      let totalPerson = tipAmount * people
      document.getElementById("total").textContent = totalPerson
    }
  }
}
