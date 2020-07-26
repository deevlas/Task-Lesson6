// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

let arr = [12, 3, 46, 65, 888, 34, 77, 94, 110, 349, 19, -40, 0, 90, 224, -99, -1, 77, 24, 99]
arr.sort((a, b) => a - b);
console.log(arr)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let arr2 = [12, 3, 46, 65, 888, 34, 77, 94, 110, 349, 19, -40, 0, 90, 224, -99, -1, 77, 24, 99]
arr2.sort((a, b) => b - a);
console.log(arr2)

// -- при помощи filter получить числа кратные 3

let array = arr.filter(value => {

    return value % 3 === 0
})

console.log(array)

// -- при помощи filter получить числа кратные 10

let arrayFromTen = arr.filter(value => !(value % 10))
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
console.log(arr)


// - создать массив со словами на 15-20 элементов.

let arrWords = ["one", "left", "million", "duck", "forest", "member", "daughter", "apple", "picture", "play", "list", "fire", "loft", "bolt", "brake"];

// -- отсортировать его по алфавиту в восходящем порядке.

let arrWordsSort = arrWords.sort()
console.log(arrWordsSort)

// -- отсортировать его по алфавиту  в нисходящем порядке.

let arrWordsCompare = arrWords.sort((a, b) => {
    if (a < b) {
        return 1
    } else {
        return -1
    }
})
console.log(arrWordsCompare)

// -- отфильтровать слова длиной менее 4х символов

let arrWorbsFilter = arrWords.filter(a => a.length <= 4)
arrWorbsFilter.sort()
console.log(arrWorbsFilter)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let arrWithMap = arrWords.map(a => {
    return a + '!'
})
console.log(arrWithMap)


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{
    name: 'vasya',
    age: 31,
    status: false
}, {
    name: 'petya',
    age: 30,
    status: true
}, {
    name: 'kolya',
    age: 29,
    status: true
}, {
    name: 'olya',
    age: 28,
    status: false
}, {
    name: 'max',
    age: 30,
    status: true
}, {
    name: 'anya',
    age: 31,
    status: false
}, {
    name: 'oleg',
    age: 28,
    status: false
}, {
    name: 'andrey',
    age: 29,
    status: true
}, {
    name: 'masha',
    age: 30,
    status: true
}, {
    name: 'olya',
    age: 31,
    status: false
}, {
    name: 'max',
    age: 31,
    status: true
}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

let userSortUp = users.sort((a, b) => {
    return a.age - b.age
})
console.log(userSortUp)

let userSortDown = users.sort((a, b) => {
    return b.age - a.age
})
console.log(userSortDown)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let userSortNameUp = users.sort((a, b) => {
//     return a.name.length - b.name.length
// })
// console.log(userSortNameUp)

// let userSortNameDown = users.sort((a, b) => {
//     return b.name.length - a.name.length
// })
// console.log(userSortNameDown)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором


// console.log("--------------")
// let newUsers = JSON.parse(JSON.stringify(users))
// console.log(newUsers)
// console.log(users)

// for (let i = 0; i < newUsers.length; i++) {
//     newUsers[i].id = i + 1
// }
// console.log(newUsers)

let usersWithId = users.map((val, index) => {
    let user = Object.assign({}, val)
    user.id = index + 1
    return user
})


console.log(users)
console.log(usersWithId)

usersWithId.sort((a, b) => {
    return b.id - a.id
})
console.log(usersWithId)