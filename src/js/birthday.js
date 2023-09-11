import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

const { getHours, getMinutes } = require("date-fns");

let date = new Date().toISOString().slice(0, 10);

setInterval(() => {
    if (getHours(date) === getMinutes(date))
    jsConfetti.addConfetti()
}, 1000*10)