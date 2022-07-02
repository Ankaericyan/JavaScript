//  Ստեղծել findArrayMaxNumber անունով ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված,
// և կվերադարձնի այդ զանգվածի ամենամեծ թիվը։ Օրինակ՝
// findArrayMaxNumber([10, -5, 25, -17, -44, 35, 29, 5]); // 35

function findArrayMaxNumber(arr) {
   let a = -Infinity
   for(let i = 0; i< arr.length;i++){
        if(arr[i] > a){
            a = arr[i];
        }
        // console.log(arr[i])
   } return a;
}
console.log(findArrayMaxNumber([10,-5, 25, -17, -44, 35, 29, 5]))
