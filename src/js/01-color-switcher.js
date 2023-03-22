
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const onStartBtnClick = () => {
timerId = setInterval(()=> {
    body.style.backgroundColor =  getRandomHexColor();
}, 1000)
startBtn.disabled = true;
stopBtn.disabled = false;

}

const onStopBtnClick = () => {
 clearInterval(timerId);
 startBtn.disabled = false;
 stopBtn.disabled = true;
}


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);