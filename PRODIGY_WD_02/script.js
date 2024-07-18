// Stopwatch functionality
let timer;
let time = 0;
let laps = [];

function startTimer() {
  if (!timer) {
    timer = setInterval(updateDisplay, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 0;
  laps = [];
  updateDisplay();
  updateLaps();
}

function lapTimer() {
  if (timer) {
    laps.push(formatTime(time));
    updateLaps();
  }
}

function updateDisplay() {
  time++;
  document.querySelector('.display').textContent = formatTime(time);
}

function updateLaps() {
  const lapsList = document.querySelector('.laps-list');
  lapsList.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${index + 1}: ${lap}`;
    lapsList.appendChild(lapItem);
  });
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);
