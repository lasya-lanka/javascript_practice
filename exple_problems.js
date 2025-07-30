//1)print each character
// function arr(x){
//     for(let i=0;i<x.length;i++){
//         console.log(x[i])
//     }
// }
// arr("lasya")

//2)check multiple strings for vowels
// function arr(x){
//     let count =0
//     let vowels='aeiou'
//     for(let i=0;i<x.length;i++){
//         if(vowels.includes(x[i])){
//             count++
//         }
//     }
//     return count
// }
// let arrOfstring = ['devi','sri','lasya']
// for(let i=0;i<arrOfstring.length;i++){
//     console.log(arrOfstring[i],'has',arr(arrOfstring[i]),'vowels')
// }

//3)square each number in an array
// function square(x){
//      return x*x
// }
// let arr=[2,3,4,5,6]
// let y=[]
//output:4,9,16,25,36
// for(let i=0;i<arr.length;i++){
//     y.push(square(arr[i]))
// }
// console.log(y)

//using map() method
// function square(x){
//     return x*x
// }
// let arr=[2,3,4,5,6]
// let y= arr.map(square)
// console.log(y)
 
//4)format names(first letter capital)
function Capitals(word){
    let x=[]
    for(let i=0;i<word.length;i++){
        let capitalised = word[i][0].toUpperCase()+word[i].slice(1)
        x.push(capitalised)
    }
console.log(x)
return x
}
const nameArray = ['lasya','surya']
Capitals(nameArray)

