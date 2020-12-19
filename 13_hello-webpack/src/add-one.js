import { timeoutPromise, removeGreeting } from './utils.js';
import Typed from 'typed.js';

export const addOne = async ms => {
  const timeDiv = document.createElement('div');
  const textSpan = document.createElement('span');

  var loadingTyped = new Typed(textSpan,  {
    strings: ['Loading...'],
    typeSpeed: 60
  });


  timeDiv.appendChild(textSpan);
  document.getElementById('container').appendChild(timeDiv);

  await timeoutPromise(ms);
  loadingTyped.destroy();

  const dateTyped = new Typed(textSpan,  {
    strings: ['Completed!', (new Date()).toString()],
    typeSpeed: 30,
    onComplete: () => {
      dateTyped.cursor.remove();
    }
  });
}

const mountAddOne = () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting()
    addOne(Math.random() * 1000);
  })
}

export default mountAddOne;
