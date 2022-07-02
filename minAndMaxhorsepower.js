// Ստեղծել findCarsByHorsepower անունով ֆունկցիա, որը կունենա երեք պարամետր՝ carsArr,
// minHorsepower և maxHorsepower։ Այդ ֆունկցիային որպես արգումենտներ եթե փոխանցենք մեքենաների
// զանգված, և մեքենաների ձիաուժն արտահայտող երկու թվային արժեքներ, ապա այն պետք է վերադարձնի
// նոր զանգված, որի մեջ կլինեն բոլոր այն մեքենաները, որոնց ձիաուժը գտնվում է minHorsepower և maxHorsepower
// արգումենտների արժեքների միջակայքում։
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

 function findCarsByHorsepower(carsArr, minHorsepower, maxHorsepower){
    let minMaxPower = []
    for(let i = 0; i < carsArr.length; i++){
         //  console.log(carsArr[i])
        if(carsArr[i].horsepower > minHorsepower && carsArr[i].horsepower < maxHorsepower ){
           minMaxPower.push(carsArr[i])
            // console.log(minMaxPower)
           
        }
   
    } return minMaxPower;
   
    
 }
 console.log(findCarsByHorsepower(cars, 2, 5))
