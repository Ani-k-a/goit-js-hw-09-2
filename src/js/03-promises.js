import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const amount = document.querySelector("[name='amount']");
const delay = document.querySelector("[name='delay']");
const step = document.querySelector("[name='step']");

const setIntervalID = null;
let counter = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve("Sucsess");
    } else {
      reject('Error');
    }
  })
}


const onClick = (event) => {
  event.preventDefault();
 
    for (let index = 1; index <= amount.value; index++) {
      const timeout = Number(delay.value) + Number(step.value) * index;
      setTimeout(() => {
        createPromise(index, delay.value).then((value) => { Notiflix.Notify.success(value);})
          .catch((value) => {Notiflix.Notify.warning(value);})
      }, timeout)
    }
};


form.addEventListener('submit', onClick);








// HomeWork
// 1. Добавити розмітку
// 2. Добавити 'submit' addEventListener на форму
// 3. Зловити  в події данні з форми - 'delay', 'step', 'amount'
// 4. Використати 'amount' як кількість запуску функції 'createPromise'
// 5. Викликати createPromise(position, delay) n разів
// і використати index як 'position' і delay =  (delay + step * index) із форми
//

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const { delay, step, amount } = e.currentTarget.elements;
//   const delayValue = parseInt(delay.value);
//   const stepValue = parseInt(step.value);
//   const amountValue = parseInt(amount.value);

//   const promises = [];

//   for (let index = 0; index < amountValue; index++) {
//     const delay = index * stepValue + delayValue;
//     // викликати 'createPromise'
//   }

//   e.currentTarget.reset();
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }