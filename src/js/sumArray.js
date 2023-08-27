const arrayOne = [5, 10, 15, 20, 25, 30, 35];
const arrayTwo = [5, 10, 15, 20, 25];

function myFunction(numbers) {
    let sumArray = 0;
    for (i = 0; i < numbers.length; i++) {
        sumArray = sumArray + numbers[i]
    }
    return sumArray
}

console.log("Wynik sumowania tablicy: " + myFunction(arrayOne))
console.log("Wynik sumowania tablicy: " + myFunction(arrayTwo))