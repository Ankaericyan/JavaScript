//Ստեղծել sortCarsByHorsepower և sortCarsByPrice անունով ֆունկցիաներ, որոնք որպես արգումենտ կստանան
//  մեքենաների զանգված և կվերադարձնեն նոր զանգված, որի մեջ բոլոր մեքենաները տեսակավորված կլինեն ըստ մեքենայի
//  շարժիչի հզորության և ըստ մեքենայի գնի համապատասխանաբար։ Տեսակավարումը պետք է լինի փոքր արժեքից դեպի մեծ
//  արժեքը։ Օգտագործել տեսակավորման ամենապարզ՝ Bubble Sort ալգորիթմը։

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

function sortCarsByHorsepower(arjeq){
    let arr =[]
    for(let i = 0; i<arjeq.length; i++){  
          arr.push(arjeq[i].horsepower)
    }
     console.log(arr)
	
        for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            if(arr[j] > arr[j+1]){
                
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
            }
        }
        }
        console.log(arr);
    }
    function sortCarsByPrice(valuePrice){
        let carsByPrice =[]
    for(let i = 0; i<valuePrice.length; i++){  
        carsByPrice.push(valuePrice[i].price)
    }
     console.log(carsByPrice)
	
        for(var k = 0; k < carsByPrice.length; k++){
        for(var m = 0; m < ( carsByPrice.length - k -1 ); m++){
            if(carsByPrice[m] > carsByPrice[m+1]){
                
            var temp1 = carsByPrice[m]
            carsByPrice[m] = carsByPrice[m + 1]
            carsByPrice[m+1] = temp1
            }
        }
        }
        console.log(carsByPrice);
    }

sortCarsByHorsepower(cars)
sortCarsByPrice(cars)
