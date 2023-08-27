const arrayOne = [5, 10, 15, 20, 25, 30, 35];
const arrayTwo = [5, 10, 15, 20, 25];
const arrayThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function myFunction(numbers) {
    let sumArray = 0;
    for (i = 0; i < numbers.length; i++) {
        sumArray = sumArray + numbers[i]
    }
    return sumArray
}

console.log("Wynik sumowania tablicy: " + myFunction(arrayOne))
console.log("Wynik sumowania tablicy: " + myFunction(arrayTwo))
console.log("Wynik sumowania tablicy: " + myFunction(arrayThree))
