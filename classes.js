let todosElementois = [...document.getElementsByClassName('time')]
let todosc1 = document.getElementsByClassName('c1')
todosc1 = [...todosc1]
let todosc2 = [...document.getElementsByClassName('c2')]
let time3 = document.getElementsByClassName('time')[2]

todosc1.map((upu)=>{
    upu.classList.add("time2")
})


console.log(todosElementois)
console.log(todosc1)
console.log(todosc2)
console.log(time3)
