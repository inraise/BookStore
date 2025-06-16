class CartList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }
}

let cart = new CartList();

var list = document.querySelectorAll("#add")

let send = document.querySelector('#send') // кнопка
let nameq = document.querySelector('#name')// поле
let subname = document.querySelector('#subname')// поле
let email = document.querySelector('#email')// поле
let password = document.querySelector('#password')// поле
send.addEventListener("click", function (e) {
    if (email.value != "" && nameq.value != "" && subname != ""
    && email.value.includes('@') && password.value.length >= 10) {
        alert("Регистрация пройдена")
        window.location.href = 'index.html';
    } else {
        alert("Регистрация не пройдена")
    }
  });

function markSelection(evt) {
    this.textContent = "Добавлено"
}

for (i = 0, len = list.length; i < len; i++) {
    list[i].onclick = markSelection
}