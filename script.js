


for (let i = 0; i <= 100; i++) {
    let restoTre= i % 3;
    let restoCinque= i % 5;

    if(restoTre === 0 && restoCinque === 0) {
        console.log(`FizzBuzz`)
    } else if (restoTre === 0 ) {
        console.log(`Fizz`)
    } else if(restoCinque === 0){
        console.log(`Buzz`)
    }else{
        console.log(i);
    }
}