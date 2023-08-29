console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000);
// 3000: 3초 뒤에 창을 띄우라는 의미

console.log("GOODBYE!!")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
// 2000: 2초

// clearInterval(id);