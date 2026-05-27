function step1(fn)(
    setTimeout(()=>{
        console.log("hello")
        fn()
    },5000)
)
function step2(fn)(
    setTimeout(()=>{
        console.log("hii")
        fn()
    },4000)
)
function step3(fn)(
    setTimeout(()=>{
        console.log("hey")
        fn()
    },3000)
)
function step4(fn)(
    setTimeout(()=>{
        console.log("helo")
        fn()
    },2000)
)
step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})