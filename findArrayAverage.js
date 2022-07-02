//  Ստեղծել findArrayAverage անունով ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված,
// և կվերադարձնի զանգվածի բոլոր անդամների միջին թվաբանականը։ Օրինակ՝
// findArrayAverage([10, -5, 25, -17, -44, 35, 29, 5]); // 4.75

function findArrayAverage(arr) {
   let sum = 0
   let caunt = 0
   for(let i=0; i<arr.length; i++){
            caunt++
            sum += arr[i];
   } return sum/caunt;
}
console.log(findArrayAverage([10,-5, 25, -17, -44, 35, 29, 5]))
