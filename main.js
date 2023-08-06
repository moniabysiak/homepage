console.log('Hej! Fajnie, że tu zaglądasz.');
const firstName = 'Monika';
const age = 35;
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const paragraph = document.querySelector('.section__header--paragraph--js')
paragraph.innerHTML = 'Ten tekst widzisz dzięki JS.'
paragraph.style.color = ('red')

function person(name, age, town, hobby) {

console.log(`Mam na imię ${name} i mam ${age} lata.`)
console.log(`Moje miasto to ${town}, lubię ${hobby}.`)
}

person('Monika',34, 'Kielce', 'spotkania z przyjaciółmi')
person('Hubert', 33, 'Kielce', 'karate')
person('Liliana', 4,'Kielce','Ju-jitsu')
person('Aniela', 2, 'Kielce', 'plac zabaw')

