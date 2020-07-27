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



// --наисать функцию калькулятора с 2 мя числами и колбеком

function calculator(a, b, result) {
    console.log(result(a, b))
}

calculator(3, 5, function (a, b) {
    return a + b
})
// --наисать функцию калькулятора с 3 мя числами и колбеком

function calculator2(a, b, c, resultat) {
    console.log(resultat(a, b, c))
}

calculator2(5, 10, 15, function (a, b, c) {
    return b + c - a
})



let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
}, {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250
}, {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300
}, {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140
}, {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200
}, {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165
}, {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350
}, {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400
}, {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230
}];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

let filterVolume = cars.filter(value => value.volume > 3)
console.log(filterVolume)

// - двигун = 2л

let filterVol = cars.filter(value => value.volume === 2)
console.log(filterVol)

// - виробник мерс

let filterMers = cars.filter(mers => mers.producer === "mercedes")
console.log(filterMers)

// - двигун більше 3х літрів + виробник мерседес

let filtVolumeMers = cars.filter(value => value.volume > 3 && value.producer === "mercedes")
console.log(filtVolumeMers)

// - двигун більше 3х літрів + виробник субару

let filtVolumeSub = cars.filter(value => value.volume > 3 && value.producer === "subaru")
console.log(filtVolumeSub)

// - сили більше ніж 300

let filtPower = cars.filter(power => power.power > 300)
console.log(filtPower)

// - сили більше ніж 300 + виробник субару

let filtPowerSub = cars.filter(pow => pow.power > 300 && pow.producer === "subaru")
console.log(filtPowerSub)

// - мотор серіі ej

let filterMotor = cars.filter(motor => {
    return motor.engine.charAt(1) === "j"
})
console.log(filterMotor)

// - сили більше ніж 300 + виробник субару + мотор серіі ej

let filterPowerProdEj = cars.filter(car => car.power > 300 && car.producer === "subaru" && car.engine.charAt(1) === 'j')
console.log(filterPowerProdEj)

// - двигун меньше 3х літрів + виробник мерседес

let fVolumeMers = cars.filter(mers => mers.volume < 3 && mers.producer === "mercedes")
console.log(fVolumeMers)

// - двигун більше 2л + сили більше 250

let volumePower = cars.filter(car => car.volume > 2 && car.power > 200)
console.log(volumePower)


// - сили більше 250  + виробник бмв


let powerBMW = cars.filter(car => car.power > 200 && car.producer === "bmw")
console.log(powerBMW)



// - взять слдующий массив
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 16
    }
}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 1
    }
}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 121
    }
}, {
    id: 4,
    name: 'olya',
    age: 28,
    status: false,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 90
    }
}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 115
    }
}, {
    id: 6,
    name: 'anya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 2
    }
}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 22
    }
}, {
    id: 8,
    name: 'andrey',
    age: 29,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 43
    }
}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 12
    }
}, {
    id: 10,
    name: 'olya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 16
    }
}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
        number: 121
    }
}];
// -- отсортировать его по id пользователей

let usersId = usersWithAddress.sort((a, b) => {
    return a.id - b.id
})
console.log(usersId)

// -- отсортировать его по id пользователей в обратном опрядке

let usersIdReverse = usersWithAddress.sort((a, b) => {
    return b.id - a.id
})

console.log(usersIdReverse)

// -- отсортировать его по возрасту пользователей

let usersSortAge = usersWithAddress.sort((a, b) => {
    return a.age - b.age
})
console.log(usersSortAge)

// -- отсортировать его по возрасту пользователей в обратном порядке

let usersSortAgeReverse = usersWithAddress.sort((first, second) => {
    return second.age - first.age
})
console.log(usersSortAgeReverse)

// -- отсортировать его по имени пользователей

let usersSortName = usersWithAddress.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    } else {
        return 1
    }
})
console.log(usersSortName)

// -- отсортировать его по имени пользователей в обратном порядке

let usersSortNameReverse = usersWithAddress.sort((a, b) => {
    if (a.name < b.name) {
        return 1
    } else {
        return -1
    }
})
console.log(usersSortNameReverse)

// -- отсортировать его по названию улицы  в алфавитном порядке

let usersSortStreet = usersWithAddress.sort((a, b) => {
    if (a.address.street - b.address.street) {
        return -1
    } else {
        return 1
    }
})
console.log(usersSortStreet)

// -- отсортировать его по номеру дома по возрастанию

let usersSortNumberHouse = usersWithAddress.sort((a, b) => {
    return a.address.number - b.address.number
})
console.log(usersSortNumberHouse)

// -- отфильтровать (оставить) тех кто младше 30

let usersFilterAge = usersWithAddress.filter(value => value.age < 30)
console.log(usersFilterAge)

// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersFilterStatus = usersWithAddress.filter(value => value.status === false)
console.log(usersFilterStatus)

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let usersFilterStatusAge = usersWithAddress.filter(value => value.status === false && value.age < 30)
console.log(usersFilterStatusAge)

// -- отфильтровать (оставить) тех у кого номер дома четный

let usersFilterHome = usersWithAddress.filter(value => value.address.number % 2 === 0)
console.log(usersFilterHome)