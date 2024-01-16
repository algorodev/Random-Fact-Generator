import './styles/style.scss'

const dailyButton = document.getElementById('daily-button')
const randomButton = document.getElementById('random-button')

if (dailyButton) dailyButton.addEventListener('click', () => console.log('Daily Button Click!'))
if (randomButton) randomButton.addEventListener('click', () => console.log('Random Button Click!'))
