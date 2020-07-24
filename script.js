// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

let arr = [12, 3, 46, 65, 888, 34, 77, 94, 110, 349, 19, -40, 0, 90, 224, -99, -1, 77, 24, 99]
// arr.sort((a, b) => a - b);
// console.log(arr)
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr.sort((a, b) => b - a);
// console.log(arr)

// -- при помощи filter получить числа кратные 3

let array = arr.filter(value => {

    return value % 3 === 0
})

console.log(array)

// -- при помощи filter получить числа кратные 10

let arrayFromTen = arr.filter(value => {
    return value % 10 === 0
})

console.log(arrayFromTen)
// -- перебрать (проитерировать) массив при помощи foreach()

arr.forEach(value => {
    console.log(value)
})

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let arrMap = arr.map(value => {
    return value * 3
})
console.log(arrMap)