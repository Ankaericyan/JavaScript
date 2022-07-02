//Ստեղծել sumOfAllCarsPrice անունով ֆունկցիա, որը որպես արգումենտ կստանա ավտոմեքենաների զանգված,
// և կվերադարձնի բոլոր ավտոմեքենաների արժեքների գումարը։ Թեսթավորման համար օգտագործել վերևում
// ստեղծված cars զանգվածը։

let cars = []
function Car(brand, color, horsepower, price) {
    this.brand = brand;
    this.color = color;
    this.horsepower = horsepower;
    this.price = price
}
let auto = new Car("BMW", "white", 8, 10000)
let auto1 = new Car("Mersedes", "black", 4, 20000)
let auto2 = new Car("Toyota", "black", 3, 20000)
let auto3 = new Car("Opel", "black", 4, 30000)
let auto4 = new Car("Audi", "black", 8, 90000)
let auto5 = new Car("Porshe", "black", 4, 60000)
let auto6 = new Car("Kia", "black", 8, 210000)
let auto7 = new Car("Honda", "black", 4, 200000)
let auto8 = new Car("Tesla", "black", 4, 25580000)
let auto9 = new Car("Lada", "black", 4, 70000)
cars.unshift( auto, auto1, auto2, auto3, auto4)
cars.push( auto5, auto6, auto7, auto8, auto9)
console.log(cars);

function sumOfAllCarsPrice(car) {
    let sumprice = 0;
    for (let i= 0; i < car.length; i++) {
        sumprice += car[i].price

    }
    return sumprice
}
console.log(sumOfAllCarsPrice(cars))
