const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

let counterValue = 0;

function increment() {
    // counterValue += 1
    value.textContent = counterValue += 1
    // console.log(counterValue);
}

function decrement() {
    counterValue -= 1
    value.textContent = counterValue
    // console.log(counterValue);
}