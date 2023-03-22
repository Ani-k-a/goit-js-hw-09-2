import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector('[data-start]');
const daysItem = document.querySelector('[data-days]');
const hoursItem = document.querySelector('[data-hours]');
const minutesItem = document.querySelector('[data-minutes]');
const secondsItem = document.querySelector('[data-seconds]');

let timerID = null;
button.disabled = true;

// const input = document.querySelector('#datetime-picker')

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      button.disabled = true;
      return;
    }

    button.disabled = false;

    const showTimer = () => {
      const time = selectedDates[0] - new Date();
      console.log(time)
      if (time <= 1000) {
        clearInterval(timerID);
        console.log('helo')
        return;
      } else {
        const { days, hours, minutes, seconds } = convertMs(time);
        daysItem.textContent = String(days).padStart(2, 0);
        hoursItem.textContent = String(hours).padStart(2, 0);
        minutesItem.textContent = String(minutes).padStart(2, 0);
        secondsItem.textContent = String(seconds).padStart(2, 0);
      }

    }

    const onButtonclick = () => {
      button.disabled = true;
      timerID = setInterval(showTimer, 1000)
    }

    button.addEventListener('click', onButtonclick);
  }

};

flatpickr('#datetime-picker', options);




