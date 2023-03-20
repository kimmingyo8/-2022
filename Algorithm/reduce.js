// const num = [4,3,2,1]

// let sum = num.reduce((acc, cur) => acc+cur)

// let sum = num.reduce((acc, cur) => {
//     return acc+cur
// })

// let sum = num.reduce((acc,cur)=> acc + cur, 0)
// console.log(sum)

// const avg = num.reduce((acc, cur, index, arr) => {
//     if(index === arr.length-1){
//         return (acc+cur) / arr.length
//     }
//     return acc+cur
// })
// console.log("avg",avg)

// const alphabets = ["a","a","c","c","c"]

// const cnt = alphabets.reduce((acc,cur)=>{
//     if(acc[cur]){
//         acc[cur] += 1
//     } else{
//         acc[cur] = 1
//     }
//     return acc
// },{})
// console.log(cnt)

function countBiggerThenTen(numbers){
    // return numbers.reduce((acc,cur)=>{
    //     if(cur>10){
    //         return acc+1
    //     }else{
    //         return acc
    //     }
    // },0)

    // return numbers.filter(el => el>10).length

    let cnt=0
    numbers.array.forEach(element => {
        if(element >10) cnt++
    });
    return cnt
}
const count = countBiggerThenTen([1,2,3,5,10,20,30,40,50,60])
console.log(count)