setTimeout(()=>{
    console.log('in the time out');
    clearInterval(int) 
}, 3000)

const int = setInterval(() => {
    console.log('in the intervel');
}, 1000);