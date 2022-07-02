// Ստեղծել findArrayMinNumber անունով ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված,
// և կվերադարձնի այդ զանգվածի ամենափոքր թիվը։ Օրինակ՝
//findArrayMinNumber([10, -5, 25, -17, -44, 35, 29, 5]); // -44


function findArrayMinNumber(arr) {
   let a = Infinity
   for(let i = 0; i<arr.length;i++){
        if(arr[i] < a){
            a = arr[i];
        }

   } return a;
}
console.log(findArrayMinNumber([10,-5, 25, -17, -44, 35, 29, 5]))
