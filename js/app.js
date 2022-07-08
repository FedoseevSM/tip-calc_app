const digit = ["5%", "10%", "15%", "20%", "25%"]
const input = document.querySelectorAll(".input")
const regex = /[0-9]/ // Допустимые значения для ввода
const alertAll = document.querySelectorAll(".warning")
const alertBill = document.querySelector(
  ".calc__bill > .calc__header > .warning"
)
const alertTip = document.querySelector(".calc__tip > .calc__header > .warning")
const alertPeople = document.querySelector(
  ".calc__people > .calc__header > .warning"
)

// Переменные input
let bill = document.getElementById("bill")
let people = document.getElementById("people")

// Функция, которая сбрасывает все значения
function reset() {
  bill.value = ""
  people.value = ""
  document.getElementById("amount").textContent = "0.00"
  document.getElementById("total").textContent = "0.00"
  alertDisplayAll("none")
}

// Запуск функции сброса по кнопке
document.getElementById("reset").onclick = reset

// Счёт результата по нажатию кнопок
document.querySelector(".calc").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return
  if (bill.value === "" && people.value === "") {
    alertDisplayAll("block")
  } else {
    if (!regex.test(bill.value) || !regex.test(people.value)) {
      if (!regex.test(bill.value)) {
        alertDisplay(alertBill, "block")
        bill.style.outlineColor = "#b57b6d"
      } else {
        alertDisplay(alertBill, "none")
        people.style.outlineColor = ""
      }
      if (!regex.test(people.value)) {
        alertDisplay(alertPeople, "block")
        people.style.outlineColor = "#b57b6d"
      } else {
        alertDisplay(alertPeople, "none")
        people.style.outlineColor = ""
      }
    } else {
      alertDisplayAll("none")
      const key = event.target.textContent
      // Нажатие кнопок с % из массива
      if (digit.includes(key)) {
        let tipAmount =
          parseInt(bill.value) + (parseInt(bill.value) / 100) * parseInt(key)
        document.getElementById("amount").textContent = tipAmount
        let totalPerson = tipAmount * parseInt(people.value)
        document.getElementById("total").textContent = totalPerson
      }
    }
  }
}

// Функция, которая управляет всеми блоками alert, свойством display
function alertDisplayAll(arg) {
  alertAll.forEach((alert) => {
    alert.style.display = `${arg}`
  })
}

// Функция, которая управляет конкретным блоком alert, свойством display
function alertDisplay(div, arg) {
  div.style.display = `${arg}`
}
