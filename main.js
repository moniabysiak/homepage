console.log('Hej! Fajnie, że tu zaglądasz.');
const firstName = 'Monika';
const age = 35;
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('h1')

console.log(header.style)

const paragraph = document.querySelector('.section__header--paragraph--js')
paragraph.innerHTML = 'Ten tekst widzisz dzięki JS.'
paragraph.style.color = ('red')