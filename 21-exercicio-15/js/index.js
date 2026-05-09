import calculate from "./calculate.js"
import copytoclipboard from "./copytoclipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyhandlers.js"
import themeswitcher from "./themeswitcher.js"


const input = document.getElementById('input')


document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress())})


document.getElementById('clear').addEventListener('click', handleClearButton)
input.addEventListener('keydown', handleTyping())
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copytoclipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeswitcher)
