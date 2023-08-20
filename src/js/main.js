import { paragraph } from "./paragraph";
import differenceInDays from 'date-fns/differenceInDays'
import differenceInWeeks from 'date-fns/differenceInWeeks'

console.log('Hej! Fajnie, że tu zaglądasz.');
const firstName = 'Monika';
const age = 35;
console.log(`Nazywam się ${firstName} i mam ${age} lat`);



function person(name, age, town, hobby) {

console.log(`Mam na imię ${name} i mam ${age} lata.`)
console.log(`Moje miasto to ${town}, lubię ${hobby}.`)
}

person('Monika',34, 'Kielce', 'spotkania z przyjaciółmi')
person('Hubert', 33, 'Kielce', 'karate')
person('Liliana', 4,'Kielce','Ju-jitsu')
person('Aniela', 2, 'Kielce', 'plac zabaw')

const resultDays = differenceInDays(
    new Date(2023, 9, 10, 18, 0),
    new Date()
)

console.log(`Za ${resultDays} dni będą moje urodziny`)

const resultLiveDays = differenceInDays(
    new Date(),
    new Date(1988, 10, 10)
)

const resultWeeks = differenceInWeeks(
    new Date(),
    new Date(1988, 10, 10)
)

console.log(`Jestem na tym świecie od ${resultWeeks} tygodni a ${resultLiveDays} dni`)