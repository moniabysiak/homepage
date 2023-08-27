for (let i = 0; i < 3; i++) {
    console.log(`${i + 1} wykonanie pętli`)
}

let myNumber = 13;

const myFunction = (a) => {
    const b = a * 3;
    const c = b * 7;
    return b * c;
}

const elements = ['❤', '😊', '😍', '🎀']
for (let i = 0; i < elements.length; i++) {
    myNumber = myNumber * (i + 1);
    console.log(`Index ${i} Emoji: ${elements[i]}`)
    myFunction(i);
}


let n = 3;
while (n <= 9) {
    console.log(n)
    n = n + 3
}



export { loops }

