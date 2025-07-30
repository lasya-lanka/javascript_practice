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
// function Capitals(word){
//     let x=[]
//     for(let i=0;i<word.length;i++){
//         let capitalised = word[i][0].toUpperCase()+word[i].slice(1)
//         x.push(capitalised)
//     }
// console.log(x)
// return x
// }
// const nameArray = ['lasya','surya']
// Capitals(nameArray)

//30-07-2025


//5)Count how many times an element appears in an array

// const num = [1,2,3,2,4,2,5]
// const search = 3
// let count = 0
// for (let i=0; i<num.length;i++){
//     if(search==num[i]){
//         count++
//     }
// }
// console.log(count)

//6)Multiply each element in an array by 2

// const arr = [2,3,4,5,6]
// let newArr = []
// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i]*2)
// }
// console.log(newArr)

//7)Filter even numbers from an array

// const arr = [1,2,3,4,5,6,7,8,9,0]
// const evenNo= []
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2 ==0){
//         evenNo.push(arr[i])
//     }
// }
// console.log(evenNo)

//8)Check if all elements in an array are positive

// const arr = [1,2,3,-4,5]
// let allPositive = true
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         allPositive = false
//         break
//     }
// }
// console.log(allPositive)

// 9)Find the average of numbers in an array
// const arr = [10,20,30,40]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// let avg =sum / arr.length
// console.log(avg)

//10)Split an array into chunks of specific size